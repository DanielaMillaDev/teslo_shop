'use client';

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { CreateOrderActions, CreateOrderData, OnApproveActions, OnApproveData } from "@paypal/paypal-js"
import { paypalCheckPayment, setTransactionId } from "@/actions";

interface Props {
    orderId: string;
    amount: number;
}

export const PaypalButton = ({ orderId, amount }: Props) => {
    const [{ isPending }] = usePayPalScriptReducer();

    const roundedAmount = (Math.round(amount * 100) / 100);

    if (isPending) {
        return (
            <div className="animate-pulse mb-16">
                <div className="h-11 bg-gray-300 rounded" />
                <div className="h-11 bg-gray-300 rounded mt-2" />
            </div>
        )
    }

    const createOrder = async (data: CreateOrderData, actions: CreateOrderActions): Promise<string> => {
        const transactionId = await actions.order.create({

            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: `${roundedAmount}`,
                    }
                }
            ],
            intent: 'CAPTURE'
        })

        const { ok } = await setTransactionId(orderId, transactionId);

        if (!ok) {
            throw new Error('No se pudo actualizar la orden')
        }

        return transactionId;

    }

    const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
        const details = await actions.order?.capture();
        if (!details?.id) {
            throw new Error('No se encontró el ID en los detalles de la orden');
        }
        await paypalCheckPayment(details.id);
    }

    return (
        <div className="relative z-0">
            <PayPalButtons
                createOrder={createOrder}
                onApprove={onApprove}

            />

        </div>

    )
}

