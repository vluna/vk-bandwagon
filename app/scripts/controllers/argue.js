'use strict';

/**
 * @ngdoc function
 * @name vkBandwagonApp.controller:DiscussCtrl
 * @description
 * # DiscussCtrl
 * Controller of the vkBandwagonApp
 */
angular.module('vkBandwagonApp')
  .controller('ArgueCtrl', ['$scope', '$http', 'saveDiscuss', 'saveRival', function ($scope, $http, saveDiscuss, saveRival) {
	// The Favorite Hockey Teams  

	// Ng-Model variable of the dropdown is $scope.theteamsSelection.id
	
	// The Rivals of the Hockey Teams
	$scope.rivalteamsSelection = [
		{ id: "VAN", id_rival: "TOR", name: 'Vancouver Canucks', city: "Vancouver", city_rival:"Toronto" , images: "../images/teams/canucks.png"},
		{ id: "CGY", id_rival: "EDM", name: 'Calgary Flames', city: "Calgary", city_rival:"Edmonton", images: "../images/teams/flames.png"},
		{ id: "TOR", id_rival: "VAN", name: 'Toronto Maple Leafs', city: "Toronto", city_rival:"Montreal" , images: "../images/teams/mapleleafs.png"},
		{ id: "EDM", id_rival: "CGY", name: 'Edmonton Oilers', city: "Edmonton", city_rival:"Calgary" , images: "../images/teams/oilers.png"},
		{ id: "CAR", id_rival: "ARI", name: 'Carolina Hurricanes', city: "Carolina", city_rival:"Arizona", images: "../images/teams/hurricane.png"  },
		{ id: "CLB", id_rival: "PIT", name: 'Columbus Blue Jackets', city: "Columbus", city_rival:"Pittsburgh", images: "../images/teams/bluejackets.png" },
		{ id: "NU", id_rival: "NYR", name: 'New Jersey Devils', city: "New Jersey", city_rival:"New York" , images: "../images/teams/devils.png"},
		{ id: "NYI", id_rival: "NYR", name: 'New York Islanders', city: "New York", city_rival:"New York"  , images: "../images/teams/islanders.png"},
		{ id: "NYR", id_rival: "NYI", name: 'New York Rangers', city: "New York", city_rival:"New York"  , images: "../images/teams/rangers.png"},
		{ id: "PHI", id_rival: "PIT", name: 'Philadelphia Flyers', city: "Philadelphia", city_rival:"Pittsburgh" , images: "../images/teams/flyers.png"},
		{ id: "PIT", id_rival: "WAS", name: 'Pittsburgh Penguins', city: "Pittsburgh", city_rival:"Washington" , images: "../images/teams/penguins.png"},
		{ id: "WAS", id_rival: "PIT", name: 'Washington Capitals', city: "Washington", city_rival:"Pittsburgh", images: "../images/teams/capitals.png" },
		{ id: "SJ", id_rival: "LA", name: 'San Jose Sharks', city: "San Jose", city_rival:"Los Angeles" , images: "../images/teams/sharks.png" },
		{ id: "LA", id_rival: "CHI", name: 'Los Angeles Kings', city: "Los Angeles", city_rival:"Chicago" , images: "../images/teams/kings.png"},
		{ id: "BOS", id_rival: "MON", name: "Boston Bruins", city: "Boston", city_rival:"Montreal", images: "../images/teams/bruins.png"},
		{ id: "BUF", id_rival: "BOS", name: "Buffalo Sabres", city: "Buffalo", city_rival:"Boston", images: "../images/teams/sabres.png"},
		{ id: "DET", id_rival: "TOR", name: "Detroit Red Wings", city: "Detroit", city_rival:"Toronto", images: "../images/teams/redwings.png"},
		{ id: "FLA", id_rival: "TB", name: "Florida Panthers", city: "Florida", city_rival:"Tampa Bay", images: "../images/teams/panthers.png"},
		{ id: "MON", id_rival: "TOR", name: "Montréal Canadiens", city: "Montreal", city_rival:"Toronto", images: "../images/teams/canadiens.png"},
		{ id: "OTT", id_rival: "MON", name: "Ottawa Senators", city: "Ottawa", city_rival:"Montreal", images: "../images/teams/senators.png"},
		{ id: "TB", id_rival: "FLA", name: "Tampa Bay Lightning", city: "Tampa Bay", city_rival:"Florida" , images: "../images/teams/lightning.png"},
		{ id: "CHI", id_rival: "LA", name: "Chicago Blackhawks", city: "Chicago", city_rival:"Los Angeles" , images: "../images/teams/blackhawks.png"},
		{ id: "COL", id_rival: "NSH", name: "Colorado Avalanche", city: "Colorado", city_rival:"Nashville" , images: "../images/teams/avalanche.png"},
		{ id: "DAL", id_rival: "BOS", name: "Dallas Stars", city: "Dallas", city_rival:"Boston" , images: "../images/teams/stars.png"},
		{ id: "MIN", id_rival: "CHI", name: "Minnesota Wild", city: "Minnesota", city_rival:"Chicago" , images: "../images/teams/wild.png"},
		{ id: "NSH", id_rival: "COL", name: "Nashville Predators", city: "Nashville", city_rival:"Colorado" , images: "../images/teams/predator.png"},
		{ id: "STL", id_rival: "CHI", name: "St. Louis Blues", city: "St. Louis", city_rival:"Chicago" , images: "../images/teams/blues.png"},
		{ id: "WPG", id_rival: "CGY", name: "Winnipeg Jets", city: "Winnipeg", city_rival:"Calgary" , images: "../images/teams/jets.png"},
		{ id: "ANA", id_rival: "LA", name: "Anaheim Ducks", city: "Anaheim", city_rival:"Los Angeles" , images: "../images/teams/ducks.png"},
		{ id: "ARI", id_rival: "CAR", name: "Arizona Coyotes", city: "Arizona", city_rival:"Carolina" , images: "../images/teams/coyotes.png"}
	];

	$scope.rivalCity;
	$scope.output;
	$scope.therivalteamsSelection = $scope.rivalteamsSelection[0];

	$scope.teamCity = $scope.therivalteamsSelection.city_rival;
	$scope.teamID = $scope.therivalteamsSelection.id_rival;
	$scope.rivalCity = $scope.therivalteamsSelection;

	console.log($scope.rivalCity.city_rival);

	$scope.rival = saveDiscuss.getRival();


	console.log($scope.rival);


	$scope.setStats = function() {
		$scope.teamID = $scope.therivalteamsSelection.id;
		$scope.teamCity = $scope.therivalteamsSelection.city;

		console.log($scope.teamID);
		for(var i = 0; i < 30; i ++) {
			if(typeof $scope.rival === 'undefined') {
				$scope.rivalCity = $scope.therivalteamsSelection;
				$scope.teamCity = $scope.rivalCity.city_rival;
				$scope.teamID =$scope.rivalCity.id_rival;
				break;
			}
			if($scope.teamID == $scope.rivalteamsSelection[i].id) {
				$scope.rivalCity = $scope.rivalteamsSelection[i];
				console.log($scope.rivalCity);
				// $scope.therivalteamsSelection = $scope.rivalteamsSelection[i];
				$scope.teamCity = $scope.rivalCity.city_rival;
				$scope.teamID =$scope.rivalCity.id_rival;
				break;
			}
		}

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
	   	saveRival.setSaveRival($scope.games_info);
	    $scope.output = saveRival.getSaveRival();
	}
	$scope.getGameID();

  }])
 .service('saveRival', function() {
    var save_rival;

    var setSaveRival = function(obj) {
		  save_rival = obj;
    };

    var getSaveRival = function(){
    	return save_rival;
  	};

    return {
  		setSaveRival: setSaveRival,
  		getSaveRival: getSaveRival,
    };
  });