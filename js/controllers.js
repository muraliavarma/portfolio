function ProjectCtrl($scope) {
	$scope.categories = [{
		language: 'JavaScript',
		projects:[{
			name: 'Rendering Pipeline in JavaScript',
			featured: true
		},{
			name: 'Portfolio in AngularJS'
		},{
			name: 'Smoothed Particle Hydrodynamics'
		}]
	},{
		language: 'Unity',
		projects:[{
			name: 'Airplane Shooter',
			featured: true
		},{
			name: 'Breakout Game'
		},{
			name: 'Fluffy - 2D Platformer'
		},{
			name: 'Multi Tag Manager'
		}]
	}];
}