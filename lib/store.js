
import { cloneDeep } from "lodash";
import create from "zustand";

const [useAccounts] = create((set) => ({
	isFilteringAccounts: false,
	stashAccount: null,
	accounts: [],
	filteredAccounts: [],
	ledgerExists: null,
	bondedAmount: null,
	freeAmount: null,
	activeStake: null,
	unlockingBalances: [],
	accountInfoLoading: false,

	setStashAccount: (stashAccount) => set(() => ({ stashAccount })),
	setAccounts: (accounts) => set(() => ({ accounts })),
	setFilteredAccounts: (filteredAccounts) => set(() => ({ filteredAccounts })),
	setIsFilteringAccounts: (isFilteringAccounts) => set(() => ({ isFilteringAccounts })),
	setAccountInfoLoading: (accountInfoLoading) =>
		set(() => ({ accountInfoLoading })),

	setAccountState: (state) => set(() => ({ ...cloneDeep(state) })),
}));

const [useTransaction] = create((set) => ({
	stakingAmount: null,
	riskPreference: null,
	timePeriodValue: null,
	timePeriodUnit: null,
	compounding: null,
	selectedValidators: [],
	returns: null,
	yieldPercentage: null,
	rewardDestination: 0,

	setStakingAmount: (amount) =>
		set((state) => ({ ...cloneDeep(state), stakingAmount: amount })),
	setTransactionState: (state) => set(() => ({ ...cloneDeep(state) })),
}));

const [usePolkadotApi, { getState: getPolkadotApiStoreState }] = create(
	(set) => ({
		apiInstance: null,

		setApiInstance: (apiInstance) => set(() => ({ apiInstance })),
	})
);

const [useHeaderLoading] = create((set) => ({
	headerLoading: false,

	setHeaderLoading: (headerLoading) => set(() => ({ headerLoading })),
}));

const [usePaymentPopover] = create((set) => ({
	isPaymentPopoverOpen: false,
	togglePaymentPopover: () =>
		set((state) => ({ isPaymentPopoverOpen: !state.isPaymentPopoverOpen })),
	closePaymentPopover: () => set(() => ({ isPaymentPopoverOpen: false })),
	openPaymentPopover: () => set(() => ({ isPaymentPopoverOpen: true })),
}));

export {
	useAccounts,
	usePolkadotApi,
	useTransaction,
	useHeaderLoading,
	usePaymentPopover,
	getPolkadotApiStoreState,
};
