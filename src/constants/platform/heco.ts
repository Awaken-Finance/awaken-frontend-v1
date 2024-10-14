import { Currency } from '@awaken/sdk-core';
import { SupportedChainId } from 'constants/chain';
import { ExtendedEther } from 'constants/tokens';
import { LendingTokens } from 'types';

export const CHAIN_INFO = {
  chainId: 128,
  rpcUrl: 'https://http-mainnet.hecochain.com',
  ethscanType: '',
  exploreUrl: 'https://hecoinfo.com',
  chainName: 'Huobi ECO Chain Mainnet',
  nativeCurrency: {
    name: 'Huobi ECO Chain Native Token',
    symbol: 'HT',
    decimals: 18,
  },
  rpcUrls: ['https://http-mainnet.hecochain.com'],
  blockExplorerUrls: ['https://scan.hecochain.com'],
  iconUrls: [''],
};

export const BLOCK_PER_DAY = 21600;
export const BLOCK_PER_YEAR = BLOCK_PER_DAY * 365;
export const W_NATIVE_TOKEN_ADDRESS = '';
export const COMMON_BASES: Currency[] = [ExtendedEther.onChain(SupportedChainId.HECO_MAINNET)];
export const FARM_PHASE2_ADDRESS = '0xb3C160feCa0500401d8c3E143198259fCa97b298';
export const FARM_PHASE1_ADDRESS = '';
export const DIVIDEND_CONTRACT_ADDRESS = '0x92fcc1fdaCf6bA6403d880dcf5CE0302c9248863';
export const IDO_ADDRESS = '0xa8d1234f118b16b7C02Af4DAe06c665c77097c69';

export const CHAIN_NATIVE_TOKEN_SYMBOL = 'HT';

export const LOCK_EXCHANGE_ADDRESS = '';
export const ENS_REGISTRAR_ADDRESSES = '';

// swap router
export const ROUTER: { [key: string]: string } = {};
// swap factory
export const FACTORY: { [key: string]: string } = {};

// for farm
export const FARM_USDT = '0x3c4b091c21a67b2097366ae167050ac42dcc90a4';
export const FARM_USDT_DECIMAL = 6;
export const FARM_AWKN = '0xa8ac0df092eb73fcab40d1df4fbfe9f1890764ed';

// for lending
export const COMPTROLLER = 'TODO';
export const MAXIMILLION = 'TODO';
export const PRICEFEED = 'TODO';
export const COMPOUNDLENS = 'TODO';
export const EXCHANGE_TOKEN_ADDRESS = 'TODO';
export const SL_SASHIMI = 'TODO';
export const SL_NATIVE_TOKEN = 'TODO';
export const LENDING_TOKENS: LendingTokens = {};

export const NATIVE_TOKEN_ADDRESS = '0x4986843fde2b0dae6bdc54c8e16567614ea8786f';

export const SWAP_TOKEN_ASSETS_DATA = {
  startTime: 1637579433,
  stakeEndTime: 1637580033,
  endTime: 1637580153,
  LockingRate: 1.06,
};

export const IDO_ASSETS_DATA = {
  PID: '7',
  idoRate: '0.05',
};

export const DIVIDEND_ASSETS_DATA = {
  PID: '0',
};

export const NATIVE_TOKEN_DECIMAL = 18;
export const SALP_DECIMALS = 18;
