import { MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import { TitleHeader } from "../TitleHeader";
import { Form, FormRow, Input, OptionalWrapper } from "./index.style";
import * as zod from "zod";
import { OrderContext } from "../../../../contexts/OrderContextProvider";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Http } from "../../../../api/http";

export function OrderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    handleCreateNewOrder,
    handleFormErrors,
    setValue,
    errors,
    setFocus,
  } = useContext(OrderContext);
  const moreInfo = watch("moreInfo");

  async function getAddressData(cep: string) {
    if (cep.length === 8) {
      setIsLoading((state) => (!state ? !state : true));
      const address = await Http.getAddress(cep);
      setValue("street", address.logradouro);
      setValue("district", address.bairro);
      setValue("city", address.localidade);
      setValue("state", address.uf);
      setFocus("number");
      setIsLoading((state) => (state ? !state : false));
    }
  }

  return (
    <>
      <TitleHeader
        icon={<MapPinLine width={22} color={defaultTheme.colors.yellow.dark} />}
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <Form
        id="orderForm"
        onSubmit={handleSubmit(handleCreateNewOrder, handleFormErrors)}
      >
        <FormRow>
          <Input
            disabled={isLoading}
            placeholder="CEP"
            {...register("zipCode", {
              onChange: async (e) => {
                await getAddressData(e.target.value);
              },
            })}
            error={!!errors.zipCode}
          />
        </FormRow>
        <FormRow>
          <Input
            disabled={isLoading}
            placeholder="Rua"
            flex
            {...register("street")}
            error={!!errors.street}
          />
        </FormRow>
        <FormRow>
          <Input
            disabled={isLoading}
            placeholder="Número"
            {...register("number")}
            error={!!errors.number}
          />
          <OptionalWrapper data-optional={!moreInfo ? "Opcional" : ""}>
            <Input
              disabled={isLoading}
              placeholder="Complemento"
              flex
              {...register("moreInfo")}
              fullWidth
              error={!!errors.moreInfo}
            />
          </OptionalWrapper>
        </FormRow>
        <FormRow>
          <Input
            disabled={isLoading}
            placeholder="Bairro"
            {...register("district")}
            error={!!errors.district}
          />
          <Input
            disabled={isLoading}
            placeholder="Cidade"
            flex
            {...register("city")}
            error={!!errors.city}
          />
          <Input
            disabled={isLoading}
            placeholder="UF"
            width={60}
            {...register("state")}
            error={!!errors.state}
          />
        </FormRow>
        <input
          disabled={isLoading}
          type="hidden"
          {...register("paymentMethod")}
        />
        <input
          disabled={isLoading}
          type="hidden"
          {...register("deliveryFee")}
        />
      </Form>
    </>
  );
}
