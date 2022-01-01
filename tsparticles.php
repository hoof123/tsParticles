<?php
/**
* Plugin Name: tsParticles
* Plugin URI: https://github.com/matteobruni/tsparticles/
* Description: a WordPress plugin for installing tsParticles
* Version: 1.0
* Author: Jake Price | JP Creative Media
* Author URI: https://jpcreativemedia.ca/
**/

// hooks
add_action( 'wp_enqueue_scripts' , 'tsparticles_enqueue_scripts' );
add_action( 'wp_body_open', 'tsparticles_init');

// register styles & scripts
function tsparticles_enqueue_scripts() {

    // css
    wp_register_style('tsparticles-css', plugin_dir_url( __FILE__ ) . 'css/tsparticles.css', 1.0, true);
    wp_enqueue_style('tsparticles-css');

    // js
    wp_register_script('tsparticles-js', plugin_dir_url( __FILE__ ) . 'js/tsparticles.js', 1.0, true);
    wp_enqueue_script('tsparticles-js');
}

function tsparticles_init() {

    // config script(s)
    wp_register_script('tsparticles-init-js', plugin_dir_url( __FILE__ ) . 'config/tsparticles-init.js', 1.0, true);
    wp_enqueue_script('tsparticles-init-js');

}
?>