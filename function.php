<?php

register_nav_menus(
	array('menu' => 'Menu Superior',
	'social_menu' =>'Redes Sociales')
);


// IMAGENES PREVIEW
add_theme_support( 'post-thumbnails' );
// SECCIONES DEL TEMA
function create_post_type() {
	register_post_type( 'producto',
		array(
			'labels' => array(
				'name'                => __( 'Producto' ),
				'singular_name'       => __( 'Producto' ),
				'menu_name'           => __( 'Producto' ),
				'all_items'           => __( 'Todos los Productos' ),
				'view_item'           => __( 'Ver Producto' ),
				'add_new_item'        => __( 'Agregar "Producto"' ),
				'add_new'             => __( 'Nuevo Producto' ),
				'edit_item'           => __( 'Editar Producto' ),
				'update_item'         => __( 'Actualizar Producto' ),
				'search_items'        => __( 'Buscar Producto' ),
				'not_found'           => __( 'Ningun Producto Encontrada' ),
				'not_found_in_trash'  => __( 'No hay Productos en la Papelera' )
				),
			'public'          => true,
			'menu_position'   => 4,
			'rewrite'         => array( 'slug' => 'producto' ),
			'capability_type' => 'post',
			'has_archive'     => true,
			'supports' => array( 'title', 'editor','thumbnail' ),
			'menu_icon' => '',
			'taxonomies' => array('category','relevancia'),
		)
  );

  register_post_type( 'Preguntas',
    array(
      'labels' => array(
        'name'                => __( 'Preguntas' ),
        
        'singular_name'       => __( 'Pregunta' ),
        'menu_name'           => __( 'Preguntas' ),
        'all_items'           => __( 'Todos las Preguntas' ),
        'view_item'           => __( 'Ver Pregunta' ),
        'add_new_item'        => __( 'Agregar "Pregunta"' ),
        'add_new'             => __( 'Nueva Pregunta' ),
        'edit_item'           => __( 'Editar Pregunta' ),
        'update_item'         => __( 'Actualizar Pregunta' ),
        'search_items'        => __( 'Buscar Pregunta' ),
        'not_found'           => __( 'Ningun Pregunta Encontrada' ),
        'not_found_in_trash'  => __( 'No hay Pregunta en la Papelera' )
        ),
      'public'          => true,
      'menu_position'   => 5,
      'rewrite'         => array( 'slug' => 'pregunta' ),
      'capability_type' => 'post',
      'has_archive'     => true,
      'supports' => array( 'title', 'editor','thumbnail' ),
      'menu_icon' => '',
      'taxonomies' => array('category'),
		'show_in_rest'        => true,
		'rewrite'             => true,
    )
  );
  
	register_post_type( 'slides',
		array(
			'labels' => array(
				'name'                => __( 'Slides' ),
				'singular_name'       => __( 'Slides' ),
				'menu_name'           => __( 'Slides' ),
				'all_items'           => __( 'Todos los Slidess' ),
				'view_item'           => __( 'Ver Slides' ),
				'add_new_item'        => __( 'Agregar "Slides"' ),
				'add_new'             => __( 'Nuevo Slides' ),
				'edit_item'           => __( 'Editar Slides' ),
				'update_item'         => __( 'Actualizar Slides' ),
				'search_items'        => __( 'Buscar Slides' ),
				'not_found'           => __( 'Ningun Slides Encontrada' ),
				'not_found_in_trash'  => __( 'No hay Productos en la Papelera' )
				),
			'public'          => true,
			'menu_position'   => 5,
			'rewrite'         => array( 'slug' => 'slides' ),
			'capability_type' => 'post',
			'has_archive'     => true,
			'supports' => array( 'title', 'editor','thumbnail' ),
			'menu_icon' => '',
			'taxonomies' => array('category'),
			)
    );
  
	add_post_type_support( 'producto', 'custom-fields' );
	add_post_type_support( 'slides', 'custom-fields' );
};
add_action( 'init', 'create_post_type' );

//api
add_action('init','pgRegisterTax');

function pgRegisterTax() {
   $args = array (
      'hierarchical' => true,
      'labels' => array (
         'name' => 'Categorias de productos',
         'singular_name' => 'Categoría de Productos'
      ),
      'show_in_nav_menu' => true,
      'show_admin_column' => true,
      'rewrite' => array('slug'=> 'categoria-productos')
   );
   register_taxonomy ('categoria-productos',array('producto'),$args);
}




add_action('rest_api_init','getCategory' );
function getCategory(){
   register_rest_route( 
      'pg/v1',
      'per-category/(?P<taxonomy>\w+)',
      array(
         'methods'=>'GET',
         'callback'=>'perCategory'
      )
   );
}
function perCategory($data) {

   $args = array (
      'post_type' => 'producto',
      'post_per_page' => -1,
      'order' => 'ASC',
      'orderby' => 'title',
      'tax_query'=>array(
         array(
            'taxonomy' => 'category',
            'field' => 'slug',
            'terms' => $data['taxonomy']
         )
      )
   );

   $productos = new WP_Query($args);
   if ($productos->have_posts()) {
      $return = array();
      while ($productos->have_posts()) {
         $productos->the_post();
         $return[] = array (
          'id' =>get_the_id(),
          'imagen' => get_the_post_thumbnail_url(get_the_id(),'medium'),
        
          'link' =>  get_post_field( 'post_name', get_post() ),
          'title'=> get_the_title(),
          'accesorio' => get_post_meta(get_the_id(), 'Accesorio', true),
          'price' => get_post_meta(get_the_id(), 'precio', true),
          'category' => get_the_terms(get_the_id(),'category'),
         );
      }
   }
   return $return;

}


add_action('rest_api_init','sliderAPI' );
function sliderAPI(){
   register_rest_route( 
      'pg/v1',
      'sliders/(?P<taxonomy>\w+)',
      array(
         'methods'=>'GET',
         'callback'=>'slider'
      )
   );
}

function slider($data){
    $args = array (
       'post_type' => 'slides',
       'posts_per_page'=> -1,
       'order' => 'ASC',
       'orderby' => 'title',
		    'tax_query'=>array(
         array(
            'taxonomy' => 'category',
            'field' => 'slug',
            'terms' => $data['taxonomy']
         ),
		)
    );
    $productos =new WP_Query($args);
    if ($productos->have_posts()) {
       $return = array();
       while ($productos->have_posts()) {
          $productos->the_post();
          $return[] = array (
			  'id' => get_the_id(),
        'imagen_large' => get_the_post_thumbnail_url(get_the_id(),'large'),
			  'imagen_mini' => get_the_post_thumbnail_url(get_the_id(),'thumbnail'),
			  'imagen_medium' => get_the_post_thumbnail_url(get_the_id(),'medium'),
			  'alt' =>  "fotografia de" + get_the_title(),
			  'name' =>get_the_title(),
        'link' => get_post_meta(get_the_id(), 'link_to_product', true),
        'titulo'=> get_the_title(),
        'description' => get_the_content(),
            
          );
       }
    }
    return $return;
}


add_action('rest_api_init','novedadesAPI' );
function novedadesAPI(){
   register_rest_route( 
      'pg/v1',
      'novedades/(?P<cantidad>\d+)',
      array(
         'methods'=>'GET',
         'callback'=>'pedidoNovedades'
      )
   );
}

function pedidoNovedades($data){
    $args = array (
       'post_type' => 'producto',
       'posts_per_page'=> 100,
       'order' => 'DESC',
       'orderby' => 'post_date',
		'paged' => 1 
    );
    $productos =new WP_Query($args);
    if ($productos->have_posts()) {
       $return = array();
       while ($productos->have_posts()) {
          $productos->the_post();
          $return[] = array (
			  'id' =>get_the_id(),
             'imagen' => get_the_post_thumbnail_url(get_the_id(),'medium'),
             //'link' => str_replace(home_url(), '', get_permalink()),
             'link' =>  get_post_field( 'post_name', get_post() ),
             'title'=> get_the_title(),
             //'content' => get_the_content(),
             'accesorio' => get_post_meta(get_the_id(), 'Accesorio', true),
             //'datos_tecnicos' => get_post_meta(get_the_id(), 'datos_tecnicos', false),
             //'medidas' => get_post_meta(get_the_id(), 'medidas', true),
             //'patente' => get_post_meta(get_the_id(), 'patente', true),
             'price' => get_post_meta(get_the_id(), 'precio', true),
             'category' => get_the_terms(get_the_id(),'category'),
			 
          );
       }
    }
    return $return;
}

add_action('rest_api_init','singleProductApi' );
function singleProductApi(){
   register_rest_route( 
      'pg/v1',
      'product/(?P<name>[a-zA-Z0-9_-]+)',
      array(
         'methods'=>'GET',
         'callback'=>'singleProduct'
      )
   );
}

function singleProduct($data){
    $args = array (
       'post_type' => 'producto',
       'posts_per_page'=> 100,
       'order' => 'DESC',
       'orderby' => 'post_date',
		'paged' => 1,
		'name'=>$data['name']
    );
    $productos =new WP_Query($args);
    if ($productos->have_posts()) {
       $return = array();
       while ($productos->have_posts()) {
          $productos->the_post();
          $return[] = array (
			  'id' =>get_the_id(),
             'imagen' => get_the_post_thumbnail_url(get_the_id(),'medium'),
             'link' => str_replace(home_url(), '', get_permalink()),
             'link' =>  get_post_field( 'post_name', get_post() ),
             'title'=> get_the_title(),
              'content' => get_the_content(),
             'accesorio' => get_post_meta(get_the_id(), 'Accesorio', true),
              'datos_tecnicos' => get_post_meta(get_the_id(), 'datos_tecnicos', false),
              'medidas' => get_post_meta(get_the_id(), 'medidas', true),
              'patente' => get_post_meta(get_the_id(), 'patente', true),
             'price' => get_post_meta(get_the_id(), 'precio', true),
             'category' => get_the_terms(get_the_id(),'category'),
			 
          );
       }
    }
    return $return;
}

add_action('rest_api_init','preguntasApi' );
function preguntasApi(){
   register_rest_route( 
      'pg/v1',
      'preguntas/',
      array(
         'methods'=>'GET',
         'callback'=>'preguntas'
      )
   );
}

function preguntas(){
  $args = array (
     'post_type' => 'preguntas',
     'posts_per_page'=> -1,
     'order' => 'ASC',
     'orderby' => 'title'
  );
  $preguntas =new WP_Query($args);
  if ($preguntas->have_posts()) {
     $return = array();
     while ($preguntas->have_posts()) {
        $preguntas->the_post();
        $return[] = array (
        'id' => get_the_id(),
        'imagen' => get_the_post_thumbnail_url(get_the_id(),'large'),
        'alt' =>  "fotografia de" + get_the_title(),
        'name' =>get_the_title(),
        'link' =>  get_post_field( 'post_name', get_post() ),
        'titulo'=> get_the_title(),
        'description' => get_the_content(),
          
        );
     }
  }
  return $return;
}


add_action('rest_api_init','singlePreguntaApi' );
function singlePreguntaApi(){
   register_rest_route( 
      'pg/v1',
      'preguntas/(?P<id>\d+)',
      array(
         'methods'=>'GET',
         'callback'=>'singlePregunta'
      )
   );
}

function singlePregunta($data){
    $args = array (
       'post_type' => 'preguntas',
       'posts_per_page'=> -1,
       'order' => 'DESC',
       'orderby' => 'post_date',
	   'paged' => 1,
	   'p'=>$data['id']
    );
    $productos =new WP_Query($args);
    if ($productos->have_posts()) {
       $return = array();
       while ($productos->have_posts()) {
          $productos->the_post();
          $return[] = array (
            'id' => get_the_id(),
            'imagen' => get_the_post_thumbnail_url(get_the_id(),'large'),
            'alt' =>  "fotografia de" + get_the_title(),
            'name' =>get_the_title(),
            'link' =>  get_post_field( 'post_name', get_post() ),
            'titulo'=> get_the_title(),
            'description' => get_the_content(),
			 
          );
       }
    }
    return $return;
}



?>