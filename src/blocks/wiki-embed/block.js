/**
 * BLOCK: UBC Wiki Embed.
 */

// Import block dependencies and components.
import Edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'ubc/wiki-embed', {
	title: 'UBC Wiki Embed',
	description: 'Adds ability to embed content from select UBC OpenWiki platforms such as "wiki.ubc.ca" and see a live preview in the editor.',
	icon: 'book',
	keywords: [ __( 'Wiki' ), __( 'Embed' ) ],
	category: 'embed',
	edit: Edit,
	save: () => null,
} );
