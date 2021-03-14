import React, {useState} from "react";

// import Accordion from "./Accordion";
// import SearchWidget from "./SearchWidget";
import Dropdown from "./Dropdown";

const items = [
	{
		title: 'What is React?',
		content: 'React is front end library',
	},
	{
		title: 'What is Laravel?',
		content: 'Laravel is a PHP framework',
	},
	{
		title: 'What is Drupal?',
		content: 'Drupal is a PHP CMS framework',
	},
];

const dropDownOptions = [
	{
		label: 'The color Red',
		value: 'red',
	},
	{
		label: 'The color Green',
		value: 'green',
	},
	{
		label: 'The color Blue',
		value: 'blue',
	},
];

const Widgets = () => {
	const [selected, setSelected] = useState(dropDownOptions[0]);
  return (
		<div className='ui container' style={{ marginTop: '20px' }}>
			{/* <Accordion items={items} /> */}
			{/* <SearchWidget/> */}
			<Dropdown
				options={dropDownOptions}
				selected={selected}
				onSelectedChange={setSelected}
			/>
		</div>
  );
}

export default Widgets;
