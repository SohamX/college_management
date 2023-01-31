import React from "react";
import UpdateFoundComponent from "../../../../../components/Marketplace/UpdateFoundComponent";

type PageProps = {
	params: {
		id: number;
	};
};

const UpdateFoundItem = ({ params: { id } }: PageProps) => {
	return (
		<div>
			<UpdateFoundComponent  />
		</div>
	);
};

export default UpdateFoundItem;
