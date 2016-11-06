'use strict';

/**
 * @ngdoc function
 * @name vkBandwagonApp.controller:DiscussCtrl
 * @description
 * # DiscussCtrl
 * Controller of the vkBandwagonApp
 */
angular.module('vkBandwagonApp')
  .controller('DiscussCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
	// The Favorite Hockey Teams  
	$scope.teamsSelection = [
		{ id: "VAN", name: 'Vancouver Canucks', city: "Vancouver" },
		{ id: "CGY", name: 'Calgary Flames', city: "Calgary" },
		{ id: "TOR", name: 'Toronto Maple Leafs', city: "Toronto" },
		{ id: "EDM", name: 'Edmonton Oilers', city: "Edmonton" },
		{ id: "CAR", name: 'Carolina Hurricanes', city: "Carolina" },
		{ id: "CLB", name: 'Columbus Blue Jackets', city: "Columbus" },
		{ id: "NU", name: 'New Jersey Devils', city: "New Jersey" },
		{ id: "NYI", name: 'New York Islanders', city: "New York" },
		{ id: "NYR", name: 'New York Rangers', city: "New York" },
		{ id: "PHI", name: 'Philadelphia Flyers', city: "Philadelphia" },
		{ id: "PIT", name: 'Pittsburgh Penguins', city: "Pittsburgh" },
		{ id: "WAS", name: 'Washington Capitals', city: "Washington" },
		{ id: "SJ", name: 'San Jose Sharks', city: "San Jose" },
		{ id: "LA", name: 'Los Angeles Kings', city: "Los Angeles" },
		{ id: "BOS", name: "Boston Bruins", city: "Boston"},
		{ id: "BUF", name: "Buffalo Sabres", city: "Buffalo"},
		{ id: "DET", name: "Detroit Red Wings", city: "Detroit"},
		{ id: "FLA", name: "Florida Panthers", city: "Florida"},
		{ id: "MON", name: "Montréal Canadiens", city: "Montreal"},
		{ id: "OTT", name: "Ottawa Senators", city: "Ottawa"},
		{ id: "TB", name: "Tampa Bay Lightning", city: "Tampa Bay"},
		{ id: "CHI", name: "Chicago Blackhawks", city: "Chicago"},
		{ id: "COL", name: "Colorado Avalanche", city: "Colorado"},
		{ id: "DAL", name: "Dallas Stars", city: "Dallas"},
		{ id: "MIN", name: "Minnesota Wild", city: "Minnesota"},
		{ id: "NSH", name: "Nashville Predators", city: "Nashville"},
		{ id: "STL", name: "St. Louis Blues", city: "St. Louis"},
		{ id: "WPG", name: "Winnipeg Jets", city: "Winnipeg"},
		{ id: "ANA", name: "Anaheim Ducks", city: "Anaheim"},
		{ id: "ARI", name: "Arizona Coyotes", city: "Arizona"}
	];
	// Ng-Model variable of the dropdown is $scope.theteamsSelection.id
	$scope.theteamsSelection = $scope.teamsSelection[0];

	$scope.teamCity = $scope.theteamsSelection.city;
	$scope.teamID =$scope.theteamsSelection.id;



	// The Rivals of the Hockey Teams
	$scope.rivalteamsSelection = [
		{ id: 1, name: 'Toronto Maple Leafs' },
		{ id: 2, name: 'Edmonton Oilers' },
		{ id: 3, name: 'Vancouver Canucks' },
		{ id: 4, name: 'Calgary Flames' },
	]

	$scope.changed = function (){
		// Check what was selected for the favorite team
		$scope.rivalteamsSelection.id = $scope.theteamsSelection.id;
	}

	$scope.setStats = function() {
		$scope.teamID = $scope.theteamsSelection.id;
		$scope.teamCity = $scope.theteamsSelection.city;

		$scope.getGameID();
    };
	
  	$scope.games_id = [];
  	$scope.games_info = [];
  	$scope.index = 0;

  	$scope.getGameID = function () {
    	$http.get('./games-schedule.json').success(function(data) {
            for(var i = 0; i < data.schedule.length; i++) {
	    		for(var j = 0; j < data.schedule[i].games.length; j++) {
	    			if(data.schedule[i].games[j].away.alias == $scope.teamID || data.schedule[i].games[j].home.alias == $scope.teamID) {
	    				$scope.games_id.push({ id: data.schedule[i].games[j].id});
	    			}
	    		}
	    	}
	    	console.log($scope.games_id);
	    	$scope.getGameStats();
        });
	}

  	$scope.getGameStats = function () {
  		$scope.games_info = [];
  		$scope.index = 0;
    	console.log("s");
	    for(var i = 0; i < $scope.games_id.length; i++) {
	    	$http.get('./game-result.json').success(function(data){

	    		for(var j = 0; j < data.games.length; j++) {
	    			if(data.games[j].id == $scope.games_id[$scope.index].id) {
	    				// console.log(data.games[j]);
		    			if(data.games[j].home.market == $scope.teamCity) {

			    			if (('points' in data.games[j].home.leaders)) {
			    				if (('goals' in data.games[j].home.leaders)) {
			    					if (('assists' in data.games[j].home.leaders)) {
					    				$scope.games_info.push({
							    			total_points_team: data.games[j].home.points,
							    			total_points_adversary: data.games[j].away.points,

							    			point_leader_name: data.games[j].home.leaders.points[0].full_name,
							    			point_leader_number: data.games[j].home.leaders.points[0].jersey_number,
							    			point_leader_goals: data.games[j].home.leaders.points[0].statistics.total.goals,
							    			point_leader_assists: data.games[j].home.leaders.points[0].statistics.total.assists,
							    			point_leader_points: data.games[j].home.leaders.points[0].statistics.total.points,

							    			goals_leader_name: data.games[j].home.leaders.goals[0].full_name,
							    			goals_leader_number: data.games[j].home.leaders.goals[0].jersey_number,
							    			goals_leader_goals: data.games[j].home.leaders.goals[0].statistics.total.goals,
							    			goals_leader_assists: data.games[j].home.leaders.goals[0].statistics.total.assists,
							    			goals_leader_points: data.games[j].home.leaders.goals[0].statistics.total.points,

							    			assists_leader_name: data.games[j].home.leaders.assists[0].full_name,
							    			assists_leader_number: data.games[j].home.leaders.assists[0].jersey_number,
							    			assists_leader_goals: data.games[j].home.leaders.assists[0].statistics.total.goals,
							    			assists_leader_assists: data.games[j].home.leaders.assists[0].statistics.total.assists,
							    			assists_leader_points: data.games[j].home.leaders.assists[0].statistics.total.points
							    		});
									}
								}
							}
			    		} else if(data.games[j].away.market == $scope.teamCity) {

			    			if (('points' in data.games[j].away.leaders)) {
			    				if (('goals' in data.games[j].away.leaders)) {
			    					if (('assists' in data.games[j].away.leaders)) {
						    			$scope.games_info.push({
							    			total_points_adversary: data.games[j].home.points,
							    			total_points_team: data.games[j].away.points,
							    			
							    			point_leader_name: data.games[j].away.leaders.points[0].full_name,
							    			point_leader_number: data.games[j].away.leaders.points[0].jersey_number,
							    			point_leader_goals: data.games[j].away.leaders.points[0].statistics.total.goals,
							    			point_leader_assists: data.games[j].away.leaders.points[0].statistics.total.assists,
							    			point_leader_points: data.games[j].away.leaders.points[0].statistics.total.points,

							    			goals_leader_name: data.games[j].away.leaders.goals[0].full_name,
							    			goals_leader_number: data.games[j].away.leaders.goals[0].jersey_number,
							    			goals_leader_goals: data.games[j].away.leaders.goals[0].statistics.total.goals,
							    			goals_leader_assists: data.games[j].away.leaders.goals[0].statistics.total.assists,
							    			goals_leader_points: data.games[j].away.leaders.goals[0].statistics.total.points,

							    			assists_leader_name: data.games[j].away.leaders.assists[0].full_name,
							    			assists_leader_number: data.games[j].away.leaders.assists[0].jersey_number,
							    			assists_leader_goals: data.games[j].away.leaders.assists[0].statistics.total.goals,
							    			assists_leader_assists: data.games[j].away.leaders.assists[0].statistics.total.assists,
							    			assists_leader_points: data.games[j].away.leaders.assists[0].statistics.total.points
							    		});
									}
								}

							}
		    			}
	    			}
	    		}
	    		$scope.index++;
	    	});
	    }
	    console.log($scope.games_info);
	}
	$scope.getGameID();

  }]);
