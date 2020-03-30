/**
 * BLOCK: UBC Wiki Embed.
 */

// Import block dependencies and components.
import Edit from './edit';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'ubc/wiki-embed', {
	title: __( 'UBC Wiki Embed', 'ubc-wiki-embed' ),
	description: __( 'Adds ability to embed content from select UBC OpenWiki platforms such as "wiki.ubc.ca" and see a live preview in the editor.', 'ubc-wiki-embed' ),
	icon: 'book',
	keywords: [ __( 'Wiki', 'ubc-wiki-embed' ), __( 'Embed', 'ubc-wiki-embed' ) ],
	category: 'embed',
	edit: Edit,
	save: () => null,
} );
