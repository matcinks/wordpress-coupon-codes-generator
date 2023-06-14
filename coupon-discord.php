<?php

/*
  Plugin Name: Automatic coupons generator - DISCORD
  Description: Generate coupon code after new order is placed.
  Version: 1.0
  Author: Matcinks
  Author URI: 
*/

// function rndw_add_dashboard_widget() {
//     wp_add_dashboard_widget(
//         'random_number_dashboard_widget', // widget id
//         'Random Number Dashboard Widget', // widget name
//         'rndw_dashboard_widget_content' // callback
//     );
// }
// add_action('wp_dashboard_setup', 'rndw_add_dashboard_widget'); // runs when wordpress sets up the dashboard

function rndw_dashboard_widget_content() { // Callback function
    // This will be the container for our React app
    echo '<div id="random-number-dashboard-widget"></div>';

    wp_enqueue_script(
        'random-number-dashboard-widget-js', // Unique script name
        plugins_url('build/index.js', __FILE__), // script URL
        array('wp-api-fetch', 'wp-components', 'wp-element', 'wp-i18n', 'wp-plugins', 'wp-edit-post'), // dependencies
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js') // version
    );
}

add_action( 'add_meta_boxes', 'bbloomer_order_meta_box' );
 
function bbloomer_order_meta_box() {
    add_meta_box( 'coupon_box', 'Kupon rabatowy', 'rndw_dashboard_widget_content', 'shop_order', 'side', 'high' );
}
 
function bbloomer_single_order_meta_box() {
    // global $post; // OPTIONALLY USE TO ACCESS ORDER POST
    echo 'Whatever HTML content';
}