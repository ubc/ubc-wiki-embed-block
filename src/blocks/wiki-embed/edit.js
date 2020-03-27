/**
 * BLOCK: Tabs
 */
const { InspectorControls } = wp.blockEditor;
const { PanelBody, Button, ButtonGroup, CheckboxControl, TextControl } = wp.components;
const ServerSideRender = wp.serverSideRender;
const { useState } = wp.element;
const { __ } = wp.i18n;

const Edit = ( { attributes, setAttributes } ) => {
	const { source, headingType, noEditLinks, noTabContens, noInfoBox } = attributes;
	const [ newSource, setNewSource ] = useState( source );
	const headingTypeOptions = {
		Default: 0,
		Tabs: 1,
		Accordions: 2,
	};

	/**
	 * Render default gray box to insert url when source is empty.
	 */
	function renderDefaultView() {
		return (
			<div className="ubc-wiki-embed-default-view">
				<h2 className="ubc-wiki-embed-default-view__heading">{ __( 'Paste URL for OpenWiki resource, i.e. https://wiki.ubc.ca/Course:Math340', 'ubc-wiki-embed' ) }</h2>
				<div className="ubc-wiki-embed-default-view__controls">
					<TextControl
						value={ newSource }
						onChange={ ( src ) => setNewSource( src ) }
					/>
					<Button
						isPrimary
						onClick={ () => {
							setAttributes( {
								source: newSource,
							} );
						} }
					>Insert</Button>
				</div>
			</div>
		);
	}

	return (
		<>
			{ source ? <ServerSideRender
				block="ubc/wiki-embed"
				attributes={ { ...attributes } }
			/> : (
				renderDefaultView()
			) }

			{ source ? <InspectorControls>
				<PanelBody title="Settings" initialOpen={ true }>
					<h2>Embed Srouce</h2>
					<TextControl
						value={ newSource }
						onChange={ ( src ) => setNewSource( src ) }
					/>
					<Button
						isPrimary
						onClick={ () => {
							setAttributes( {
								source: newSource,
							} );
						} }
					>
						Update
					</Button>
					<hr />
					<h2>Heading Type</h2>
					<ButtonGroup>
						{ Object.keys( headingTypeOptions ).map( ( key ) => {
							return (
								<Button
									key={ key }
									isPrimary={ headingTypeOptions[ key ] === headingType }
									isDefault={ headingTypeOptions[ key ] !== headingType }
									onClick={ () => {
										setAttributes( {
											headingType: headingTypeOptions[ key ],
										} );
									} }
								>
									{ key }
								</Button>
							);
						} ) }
					</ButtonGroup>
					<hr />
					<h2>Options</h2>
					<CheckboxControl
						label="Remove edit links"
						help="Often wiki pages have edit links displayed next to sections, which is not always desired."
						checked={ noEditLinks }
						onChange={ () => setAttributes( {
							noEditLinks: ! noEditLinks,
						} ) }
					/>
					<CheckboxControl
						label="Remove table of contents"
						help="Often wiki pages have a table of contents (a list of content) at the top of each page."
						checked={ noTabContens }
						onChange={ () => setAttributes( {
							noTabContens: ! noTabContens,
						} ) }
					/>
					<CheckboxControl
						label="Remove infoboxes"
						checked={ noInfoBox }
						onChange={ () => setAttributes( {
							noInfoBox: ! noInfoBox,
						} ) }
					/>
				</PanelBody>
			</InspectorControls> : null }
		</>
	);
};

export default Edit;
