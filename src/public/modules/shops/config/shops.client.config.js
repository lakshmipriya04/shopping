'use strict';

// Configuring the Articles module
angular.module('shops').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('y', 'Shops', 'shops', 'dropdown', '/shops(/create)?');
		Menus.addSubMenuItem('y', 'shops', 'List Shops', 'shops');
		Menus.addSubMenuItem('y', 'shops', 'New Shop', 'shops/create');
	}
]);