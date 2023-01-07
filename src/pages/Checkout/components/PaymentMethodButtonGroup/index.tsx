import { Bank, CreditCard, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContextProvider";
import { PaymentMethodEnum } from "../../../../models/Order";
import { defaultTheme } from "../../../../styles/themes/default";
import {
  ErrorLabel,
  PaymentMethodButton,
  PaymentMethodButtonGroupContainer,
} from "./index.style";

export function PaymentMethodButtonGroup() {
  const { setValue, errors } = useContext(OrderContext);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodEnum | null>(
    null
  );

  function handleChangePaymentMethod(value: PaymentMethodEnum) {
    if (value === paymentMethod) return;
    setPaymentMethod((state) => {
      setValue("paymentMethod", value);
      if (errors.paymentMethod) errors.paymentMethod = undefined;
      return value;
    });
  }

  return (
    <>
      <PaymentMethodButtonGroupContainer>
        <PaymentMethodButton
          error={!!errors.paymentMethod}
          onClick={() => handleChangePaymentMethod(PaymentMethodEnum.CREDIT)}
          selected={paymentMethod === PaymentMethodEnum.CREDIT}
        >
          <CreditCard width={16} color={defaultTheme.colors.purple.default} />
          cartão de crédito
        </PaymentMethodButton>
        <PaymentMethodButton
          error={!!errors.paymentMethod}
          onClick={() => handleChangePaymentMethod(PaymentMethodEnum.DEBIT)}
          selected={paymentMethod === PaymentMethodEnum.DEBIT}
        >
          <Bank width={16} color={defaultTheme.colors.purple.default} />
          cartão de débito
        </PaymentMethodButton>
        <PaymentMethodButton
          error={!!errors.paymentMethod}
          onClick={() => handleChangePaymentMethod(PaymentMethodEnum.MONEY)}
          selected={paymentMethod === PaymentMethodEnum.MONEY}
        >
          <Money width={16} color={defaultTheme.colors.purple.default} />
          Dinheiro
        </PaymentMethodButton>
      </PaymentMethodButtonGroupContainer>
      {!!errors.paymentMethod && (
        <ErrorLabel>É necessário selecionar um método de pagamento!</ErrorLabel>
      )}
    </>
  );
}
