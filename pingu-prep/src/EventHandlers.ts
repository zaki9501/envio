/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Pingu,
  Pingu_Initialized,
  Pingu_OrderCancelled,
  Pingu_OrderCreated,
  Pingu_SetGov,
} from "generated";

Pingu.Initialized.handler(async ({ event, context }) => {
  const entity: Pingu_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Pingu_Initialized.set(entity);
});

Pingu.OrderCancelled.handler(async ({ event, context }) => {
  const entity: Pingu_OrderCancelled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    user: event.params.user,
    reason: event.params.reason,
  };

  context.Pingu_OrderCancelled.set(entity);
});

Pingu.OrderCreated.handler(async ({ event, context }) => {
  const entity: Pingu_OrderCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    orderId: event.params.orderId,
    user: event.params.user,
    asset: event.params.asset,
    market: event.params.market,
    margin: event.params.margin,
    size: event.params.size,
    price: event.params.price,
    fee: event.params.fee,
    isLong: event.params.isLong,
    orderType: event.params.orderType,
    isReduceOnly: event.params.isReduceOnly,
    expiry: event.params.expiry,
    cancelOrderId: event.params.cancelOrderId,
  };

  context.Pingu_OrderCreated.set(entity);
});

Pingu.SetGov.handler(async ({ event, context }) => {
  const entity: Pingu_SetGov = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    prevGov: event.params.prevGov,
    nextGov: event.params.nextGov,
  };

  context.Pingu_SetGov.set(entity);
});
