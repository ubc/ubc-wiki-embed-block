<?php
/**
 * UBC Wiki Embed Block
 *
 * @package     UBC Blocks
 * @author      Kelvin Xu
 * @copyright   2020 University of British Columbia
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: UBC Wiki Embed Block
 * Plugin URI:  https://ubc.ca/
 * Description: Gutenberg block to embed content from wiki websites
 * Version:     1.0.0
 * Author:      Kelvin Xu
 * Text Domain: ubc-wiki-embed-block
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

 namespace UBC\Blocks\WikiEmbed;

 add_action('init', __NAMESPACE__ . '\\load_block_assets', 10);

 function load_block_assets(){
     wp_register_script(
         'ubc-wiki-embed-script',
         plugins_url( 'build/block.js', __FILE__ ),
         array(
             'wp-blocks',
             'wp-i18n',
             'wp-element',
             'wp-editor',
             'wp-plugins',
             'wp-edit-post',
         ),
         filemtime( plugin_dir_path( __FILE__ ) . 'build/block.js'),
         true
    );

    wp_register_style(
        'ubc-wiki-embed-style',
        plugins_url( '/build/block.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/block.css' )
    );

    // Will be moreved
    add_editor_style( 'https://cdn.ubc.ca/clf/7.0.4/css/ubc-clf-full.min.css' );

    // Get default settings from Wiki Embed plugin
    $wiki_embed_defaults = get_option( 'wikiembed_options' ) ? get_option( 'wikiembed_options' )['default'] : null;

    /**
     * Wiki embed plugin only save global settings when clicked on save button on the settings page, not during plugin activation.
     * So all the settings here have hardcoded fall back aligned with Wiki Embed plugin default.
     */
    register_block_type(
        'ubc/wiki-embed',
        array(
            'editor_script' => 'ubc-wiki-embed-script',
            'editor_style'  => 'ubc-wiki-embed-style',
            'render_callback' => __NAMESPACE__ . '\\render_block',
            'attributes' => array(
                'source' => array(
                    'type' => 'string',
                    'default' => '',
                ),
                'headingType' => array(
                    'type' => 'string',
                    'default' => $wiki_embed_defaults ? $wiki_embed_defaults['tabs'] : '1',
                ),
                'noEditLinks' => array(
                    'type' => 'boolean',
                    'default' => $wiki_embed_defaults ? $wiki_embed_defaults['no-edit'] : true,
                ),
                'noTabContens' => array(
                    'type' => 'boolean',
                    'default' => $wiki_embed_defaults ? boolval( $wiki_embed_defaults['no-contents'] ) : true,
                ),
                'noInfoBox' => array(
                    'type' => 'boolean',
                    'default' => $wiki_embed_defaults ? boolval( $wiki_embed_defaults['no-infobox'] ) : false,
                ),
            )
        )
    );
 }

 /**
  * Server Side Rendering content of the Wiki Embed block.
  *
  * @return void
  */
 function render_block( $attributes ) {
    return $attributes['source'] ? do_shortcode(
        sprintf(
            '[wiki-embed%1$s%2$s%3$s%4$s%5$s]',
            $attributes['source'] ? ' url="' . esc_html( $attributes['source'] ) . '"' : '',
            $attributes['headingType'] === '0' ? '' : ' ' . ( $attributes['headingType'] === '1' ? 'tabs' : 'accordion' ),
            $attributes['noEditLinks'] ? ' no-edit' : '',
            $attributes["noTabContens"] ? ' no-contents' : '',
            $attributes["noInfoBox"] ? ' no-infobox' : ''
        )
    ) : '';
 }

