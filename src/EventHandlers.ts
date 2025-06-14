/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Ambiant,
  Ambiant_AuthorityTransfer,
  Ambiant_CrocColdCmd,
  Ambiant_CrocColdProtocolCmd,
  Ambiant_CrocHotCmd,
  Ambiant_CrocKnockoutCmd,
  Ambiant_CrocKnockoutCross,
  Ambiant_CrocMicroBurnAmbient,
  Ambiant_CrocMicroBurnRange,
  Ambiant_CrocMicroMintAmbient,
  Ambiant_CrocMicroMintRange,
  Ambiant_CrocMicroSwap,
  Ambiant_CrocSwap,
  Ambiant_CrocWarmCmd,
  Ambiant_DisablePoolTemplate,
  Ambiant_HotPathOpen,
  Ambiant_PriceImproveThresh,
  Ambiant_ProtocolDividend,
  Ambiant_ResyncTakeRate,
  Ambiant_SafeMode,
  Ambiant_SetNewPoolLiq,
  Ambiant_SetPoolTemplate,
  Ambiant_SetRelayerTakeRate,
  Ambiant_SetTakeRate,
  Ambiant_TreasurySet,
  Ambiant_UpgradeProxy,
} from "generated";

Ambiant.AuthorityTransfer.handler(async ({ event, context }) => {
  const entity: Ambiant_AuthorityTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    authority: event.params.authority,
  };

  context.Ambiant_AuthorityTransfer.set(entity);
});

Ambiant.CrocColdCmd.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocColdCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
  };

  context.Ambiant_CrocColdCmd.set(entity);
});

Ambiant.CrocColdProtocolCmd.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocColdProtocolCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
  };

  context.Ambiant_CrocColdProtocolCmd.set(entity);
});

Ambiant.CrocHotCmd.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocHotCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    baseFlow: event.params.baseFlow,
    quoteFlow: event.params.quoteFlow,
  };

  context.Ambiant_CrocHotCmd.set(entity);
});

Ambiant.CrocKnockoutCmd.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocKnockoutCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    baseFlow: event.params.baseFlow,
    quoteFlow: event.params.quoteFlow,
  };

  context.Ambiant_CrocKnockoutCmd.set(entity);
});

Ambiant.CrocKnockoutCross.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocKnockoutCross = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pool: event.params.pool,
    tick: event.params.tick,
    isBid: event.params.isBid,
    pivotTime: event.params.pivotTime,
    feeMileage: event.params.feeMileage,
    commitEntropy: event.params.commitEntropy,
  };

  context.Ambiant_CrocKnockoutCross.set(entity);
});

Ambiant.CrocMicroBurnAmbient.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocMicroBurnAmbient = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambiant_CrocMicroBurnAmbient.set(entity);
});

Ambiant.CrocMicroBurnRange.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocMicroBurnRange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambiant_CrocMicroBurnRange.set(entity);
});

Ambiant.CrocMicroMintAmbient.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocMicroMintAmbient = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambiant_CrocMicroMintAmbient.set(entity);
});

Ambiant.CrocMicroMintRange.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocMicroMintRange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambiant_CrocMicroMintRange.set(entity);
});

Ambiant.CrocMicroSwap.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocMicroSwap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    output: event.params.output,
  };

  context.Ambiant_CrocMicroSwap.set(entity);
});

Ambiant.CrocSwap.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocSwap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    base: event.params.base,
    quote: event.params.quote,
    poolIdx: event.params.poolIdx,
    isBuy: event.params.isBuy,
    inBaseQty: event.params.inBaseQty,
    qty: event.params.qty,
    tip: event.params.tip,
    limitPrice: event.params.limitPrice,
    minOut: event.params.minOut,
    reserveFlags: event.params.reserveFlags,
    baseFlow: event.params.baseFlow,
    quoteFlow: event.params.quoteFlow,
  };

  context.Ambiant_CrocSwap.set(entity);
});

Ambiant.CrocWarmCmd.handler(async ({ event, context }) => {
  const entity: Ambiant_CrocWarmCmd = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    input: event.params.input,
    baseFlow: event.params.baseFlow,
    quoteFlow: event.params.quoteFlow,
  };

  context.Ambiant_CrocWarmCmd.set(entity);
});

Ambiant.DisablePoolTemplate.handler(async ({ event, context }) => {
  const entity: Ambiant_DisablePoolTemplate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolIdx: event.params.poolIdx,
  };

  context.Ambiant_DisablePoolTemplate.set(entity);
});

Ambiant.HotPathOpen.handler(async ({ event, context }) => {
  const entity: Ambiant_HotPathOpen = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _0: event.params._0,
  };

  context.Ambiant_HotPathOpen.set(entity);
});

Ambiant.PriceImproveThresh.handler(async ({ event, context }) => {
  const entity: Ambiant_PriceImproveThresh = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    unitTickCollateral: event.params.unitTickCollateral,
    awayTickTol: event.params.awayTickTol,
  };

  context.Ambiant_PriceImproveThresh.set(entity);
});

Ambiant.ProtocolDividend.handler(async ({ event, context }) => {
  const entity: Ambiant_ProtocolDividend = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    recv: event.params.recv,
  };

  context.Ambiant_ProtocolDividend.set(entity);
});

Ambiant.ResyncTakeRate.handler(async ({ event, context }) => {
  const entity: Ambiant_ResyncTakeRate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    base: event.params.base,
    quote: event.params.quote,
    poolIdx: event.params.poolIdx,
    takeRate: event.params.takeRate,
  };

  context.Ambiant_ResyncTakeRate.set(entity);
});

Ambiant.SafeMode.handler(async ({ event, context }) => {
  const entity: Ambiant_SafeMode = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _0: event.params._0,
  };

  context.Ambiant_SafeMode.set(entity);
});

Ambiant.SetNewPoolLiq.handler(async ({ event, context }) => {
  const entity: Ambiant_SetNewPoolLiq = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    liq: event.params.liq,
  };

  context.Ambiant_SetNewPoolLiq.set(entity);
});

Ambiant.SetPoolTemplate.handler(async ({ event, context }) => {
  const entity: Ambiant_SetPoolTemplate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    poolIdx: event.params.poolIdx,
    feeRate: event.params.feeRate,
    tickSize: event.params.tickSize,
    jitThresh: event.params.jitThresh,
    knockout: event.params.knockout,
    oracleFlags: event.params.oracleFlags,
  };

  context.Ambiant_SetPoolTemplate.set(entity);
});

Ambiant.SetRelayerTakeRate.handler(async ({ event, context }) => {
  const entity: Ambiant_SetRelayerTakeRate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    takeRate: event.params.takeRate,
  };

  context.Ambiant_SetRelayerTakeRate.set(entity);
});

Ambiant.SetTakeRate.handler(async ({ event, context }) => {
  const entity: Ambiant_SetTakeRate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    takeRate: event.params.takeRate,
  };

  context.Ambiant_SetTakeRate.set(entity);
});

Ambiant.TreasurySet.handler(async ({ event, context }) => {
  const entity: Ambiant_TreasurySet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    treasury: event.params.treasury,
    startTime: event.params.startTime,
  };

  context.Ambiant_TreasurySet.set(entity);
});

Ambiant.UpgradeProxy.handler(async ({ event, context }) => {
  const entity: Ambiant_UpgradeProxy = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proxy: event.params.proxy,
    proxyIdx: event.params.proxyIdx,
  };

  context.Ambiant_UpgradeProxy.set(entity);
});
