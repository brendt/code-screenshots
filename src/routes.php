<?php

use Brendt\Stitcher\Handler\RssHandler;

$redirects = [
    '/feed' => '/rss',
    '/blog' => '/blog/page-1',
    '/presentations' => 'https://github.com/brendt/presentations',
    '/guide' => '/guide/setting-up',
    '/cognitive-load' => '/blog/a-programmers-cognitive-load',
    '/key-binding' => '/blog/mastering-key-bindings',
    '/key-bindings' => '/blog/mastering-key-bindings',
    '/keybinds' => '/blog/mastering-key-bindings',
    '/keybind' => '/blog/mastering-key-bindings',
    '/keybinding' => '/blog/mastering-key-bindings',
    '/keybindings' => '/blog/mastering-key-bindings',
    '/curly' => '/blog/where-a-curly-bracket-belongs',
];

$router = \Stitcher\App::router();

foreach ($redirects as $url => $targetUrl) {
    $router->redirect($url, $targetUrl);
    $router->redirect($url . '/', $targetUrl);
}

$router->get('/rss', RssHandler::class);
