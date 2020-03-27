/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'ubc/wiki-embed', {
	title: 'UBC Wiki Embed',
	description: 'Gutenberg block to provide ability to embed page contents from any wiki resources',
	icon: 'book',
	keywords: [ __( 'Wiki' ), __( 'Embed' ) ],
	category: 'embed',
	edit: Edit,
	save: () => null,
} );
