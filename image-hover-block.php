<?php
/**
 * Plugin Name: Image Hover Block
 * Description: Gutenberg block that shows text on image hover.
 * Version: 1.0.0
 * Author: Arti Rawat
 */

function ihb_register_block() {
    register_block_type(__DIR__);
}
add_action('init', 'ihb_register_block');
