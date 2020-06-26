import OverviewCards from "./OverviewCards";
import { Edit2, Star } from "react-feather";
import { upperCase } from "lodash";
import RiskTag from "@components/reward-calculator/RiskTag";

const StatusTag = ({ status }) => {
	const getColor = () => {
		if (status === 'active') return 'teal-500';
		if (status === 'inactive') return 'red-500';
		if (status === 'waiting') return 'gray-500';
	};

	const color = getColor();

	return (
		<div className={`px-2 py-1 text-sm rounded-lg text-${color} border border-${color}`}>
			{upperCase(status)}
		</div>
	);
};

const Overview = () => {
	return (
		<div className="px-10 py-10">
			<OverviewCards />
			<div className="mt-10">
				<div className="flex justify-between items-center">
					<h3 className="text-2xl">My Validators</h3>
					<div className="flex items-center">
						<button className="flex items-center text-gray-500 mr-5 p-1">
							<Edit2 size="20px" className="mr-2" />
							<span>Edit Validators</span>
						</button>
						<button className="text-teal-500 p-1">Claim All Rewards</button>
					</div>
				</div>
				<div className="table-container mt-5 p-4">
					<div className="flex items-center justify-around rounded-lg border border-gray-300 py-2">
						<img src="http://placehold.it/255" className="rounded-full w-12 h-12 mr-4" />
						<span className="text-xs">DasX1jVCRMe5e2DN8XJjGQrWFkBkNvtRDRf5dkb6iUUGFfz</span>
						<StatusTag status="active" />
						<div className="flex flex-col">
							<span className="text-xs text-gray-500 font-semibold">Risk Score</span>
							<div className="rounded-full font-semibold"><RiskTag risk={55} /></div>
						</div>
						<div className="flex flex-col">
							<span className="text-xs text-gray-500 font-semibold">Own Stake</span>
							<h3 className="text-lg">100 KSM</h3>
						</div>
						<div className="flex flex-col">
							<span className="text-xs text-gray-500 font-semibold">Other Stake</span>
							<h3 className="text-lg">100 KSM</h3>
						</div>
						<button className="flex items-center justify-between border-2 border-orange-500 rounded-lg py-1 px-3">
							<Star className="text-orange-500 mr-2" fill="#F5B100" size="20px" strokeWidth="2px" />
							<div className="flex flex-col items-center">
								<span className="text-sm text-gray-900">Claim Rewards</span>
								<span className="text-xs text-gray-700">3 days left</span>
							</div>
						</button>
					</div>
				</div>
			</div>
			<style jsx>{`
				.table-container {
					height: 48vh;
				}
			`}</style>
		</div>
	);
};

export default Overview;
