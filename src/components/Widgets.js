import React from "react";

import Accordion from "./Accordion";
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

const Widgets = () => {
  return (
		<div className="ui container" style={{'marginTop': '20px'}}>
			<Accordion items={items} />
		</div>
  );
}

export default Widgets;
