'use strict';

/**
 * @ngdoc function
 * @name vkBandwagonApp.controller:DiscussCtrl
 * @description
 * # DiscussCtrl
 * Controller of the vkBandwagonApp
 */
angular.module('vkBandwagonApp')
  .controller('DiscussCtrl', ['$scope', '$http', 'saveDiscuss', function ($scope, $http, saveDiscuss) {
	// The Favorite Hockey Teams  
	$scope.teamsSelection = [
		{ id: "VAN", name: 'Vancouver Canucks', city: "Vancouver", images: "../images/teams/canucks.png" },
		{ id: "CGY", name: 'Calgary Flames', city: "Calgary" , images: "../images/teams/flames.png"},
		{ id: "TOR", name: 'Toronto Maple Leafs', city: "Toronto", images: "../images/teams/mapleleafs.png" },
		{ id: "EDM", name: 'Edmonton Oilers', city: "Edmonton" , images: "../images/teams/oilers.png"},
		{ id: "CAR", name: 'Carolina Hurricanes', city: "Carolina", images: "../images/teams/hurricane.png" },
		{ id: "CLB", name: 'Columbus Blue Jackets', city: "Columbus" , images: "../images/teams/bluejackets.png"},
		{ id: "NU", name: 'New Jersey Devils', city: "New Jersey" , images: "../images/teams/devils.png"},
		{ id: "NYI", name: 'New York Islanders', city: "New York" , images: "../images/teams/islanders.png"},
		{ id: "NYR", name: 'New York Rangers', city: "New York" , images: "../images/teams/rangers.png"},
		{ id: "PHI", name: 'Philadelphia Flyers', city: "Philadelphia", images: "../images/teams/flyers.png" },
		{ id: "PIT", name: 'Pittsburgh Penguins', city: "Pittsburgh", images: "../images/teams/penguins.png" },
		{ id: "WAS", name: 'Washington Capitals', city: "Washington", images: "../images/teams/capitals.png" },
		{ id: "SJ", name: 'San Jose Sharks', city: "San Jose" , images: "../images/teams/sharks.png"},
		{ id: "LA", name: 'Los Angeles Kings', city: "Los Angeles", images: "../images/teams/kings.png" },
		{ id: "BOS", name: "Boston Bruins", city: "Boston", images: "../images/teams/bruins.png"},
		{ id: "BUF", name: "Buffalo Sabres", city: "Buffalo", images: "../images/teams/sabres.png"},
		{ id: "DET", name: "Detroit Red Wings", city: "Detroit", images: "../images/teams/redwings.png"},
		{ id: "FLA", name: "Florida Panthers", city: "Florida", images: "../images/teams/panthers.png"},
		{ id: "MON", name: "Montréal Canadiens", city: "Montreal", images: "../images/teams/canadiens.png"},
		{ id: "OTT", name: "Ottawa Senators", city: "Ottawa", images: "../images/teams/senators.png"},
		{ id: "TB", name: "Tampa Bay Lightning", city: "Tampa Bay", images: "../images/teams/lightning.png"},
		{ id: "CHI", name: "Chicago Blackhawks", city: "Chicago" , images: "../images/teams/blackhawks.png"},
		{ id: "COL", name: "Colorado Avalanche", city: "Colorado", images: "../images/teams/avalanche.png"},
		{ id: "DAL", name: "Dallas Stars", city: "Dallas", images: "../images/teams/stars.png"},
		{ id: "MIN", name: "Minnesota Wild", city: "Minnesota", images: "../images/teams/wild.png"},
		{ id: "NSH", name: "Nashville Predators", city: "Nashville", images: "../images/teams/predator.png"},
		{ id: "STL", name: "St. Louis Blues", city: "St. Louis", images: "../images/teams/blues.png"},
		{ id: "WPG", name: "Winnipeg Jets", city: "Winnipeg", images: "../images/teams/jets.png"},
		{ id: "ANA", name: "Anaheim Ducks", city: "Anaheim", images: "../images/teams/ducks.png"},
		{ id: "ARI", name: "Arizona Coyotes", city: "Arizona", images: "../images/teams/coyotes.png"}
	];
	// Ng-Model variable of the dropdown is $scope.theteamsSelection.id
	$scope.theteamsSelection = $scope.teamsSelection[0];

	$scope.teamCity = $scope.theteamsSelection.city;
	$scope.teamID =$scope.theteamsSelection.id;

	// The Rivals of the Hockey Teams
	$scope.rivalteamsSelection = [
		{ id: "VAN", id_rival: "TOR", name: 'Vancouver Canucks', city: "Vancouver", city_rival:"Toronto" },
		{ id: "CGY", id_rival: "EDM", name: 'Calgary Flames', city: "Calgary", city_rival:"Edmonton" },
		{ id: "TOR", id_rival: "VAN", name: 'Toronto Maple Leafs', city: "Toronto", city_rival:"Montreal" },
		{ id: "EDM", id_rival: "CGY", name: 'Edmonton Oilers', city: "Edmonton", city_rival:"Calgary" },
		{ id: "CAR", id_rival: "ARI", name: 'Carolina Hurricanes', city: "Carolina", city_rival:"Arizona" },
		{ id: "CLB", id_rival: "PIT", name: 'Columbus Blue Jackets', city: "Columbus", city_rival:"Pittsburgh" },
		{ id: "NU", id_rival: "NYR", name: 'New Jersey Devils', city: "New Jersey", city_rival:"New York" },
		{ id: "NYI", id_rival: "NYR", name: 'New York Islanders', city: "New York", city_rival:"New York" },
		{ id: "NYR", id_rival: "NYI", name: 'New York Rangers', city: "New York", city_rival:"New York" },
		{ id: "PHI", id_rival: "PIT", name: 'Philadelphia Flyers', city: "Philadelphia", city_rival:"Pittsburgh" },
		{ id: "PIT", id_rival: "WAS", name: 'Pittsburgh Penguins', city: "Pittsburgh", city_rival:"Washington" },
		{ id: "WAS", id_rival: "PIT", name: 'Washington Capitals', city: "Washington", city_rival:"Pittsburgh" },
		{ id: "SJ", id_rival: "LA", name: 'San Jose Sharks', city: "San Jose", city_rival:"Los Angeles" },
		{ id: "LA", id_rival: "CHI", name: 'Los Angeles Kings', city: "Los Angeles", city_rival:"Chicago" },
		{ id: "BOS", id_rival: "MON", name: "Boston Bruins", city: "Boston", city_rival:"Montreal"},
		{ id: "BUF", id_rival: "BOS", name: "Buffalo Sabres", city: "Buffalo", city_rival:"Boston"},
		{ id: "DET", id_rival: "TOR", name: "Detroit Red Wings", city: "Detroit", city_rival:"Toronto"},
		{ id: "FLA", id_rival: "TB", name: "Florida Panthers", city: "Florida", city_rival:"Tampa Bay"},
		{ id: "MON", id_rival: "TOR", name: "Montréal Canadiens", city: "Montreal", city_rival:"Toronto"},
		{ id: "OTT", id_rival: "MON", name: "Ottawa Senators", city: "Ottawa", city_rival:"Montreal"},
		{ id: "TB", id_rival: "FLA", name: "Tampa Bay Lightning", city: "Tampa Bay", city_rival:"Florida"},
		{ id: "CHI", id_rival: "LA", name: "Chicago Blackhawks", city: "Chicago", city_rival:"Los Angeles"},
		{ id: "COL", id_rival: "NSH", name: "Colorado Avalanche", city: "Colorado", city_rival:"Nashville"},
		{ id: "DAL", id_rival: "BOS", name: "Dallas Stars", city: "Dallas", city_rival:"Boston"},
		{ id: "MIN", id_rival: "CHI", name: "Minnesota Wild", city: "Minnesota", city_rival:"Chicago"},
		{ id: "NSH", id_rival: "COL", name: "Nashville Predators", city: "Nashville", city_rival:"Colorado"},
		{ id: "STL", id_rival: "CHI", name: "St. Louis Blues", city: "St. Louis", city_rival:"Chicago"},
		{ id: "WPG", id_rival: "CGY", name: "Winnipeg Jets", city: "Winnipeg", city_rival:"Calgary"},
		{ id: "ANA", id_rival: "LA", name: "Anaheim Ducks", city: "Anaheim", city_rival:"Los Angeles"},
		{ id: "ARI", id_rival: "CAR", name: "Arizona Coyotes", city: "Arizona", city_rival:"Carolina"}
	];
	
	for(var i = 0; i < 30; i ++) {
		if($scope.teamID == $scope.rivalteamsSelection[i].id_rival) {
			saveDiscuss.setRival($scope.teamsSelection[i]);
			break;
		}
	}

	$scope.setStats = function() {
		$scope.teamID = $scope.theteamsSelection.id;
		$scope.teamCity = $scope.theteamsSelection.city;
		for(var i = 0; i < 30; i ++) {
			if($scope.teamID == $scope.rivalteamsSelection[i].id_rival) {
				saveDiscuss.setRival($scope.rivalteamsSelection[i]);
				break;
			}
		}

		$scope.getGameID();
    };


  	$scope.games_id = [];
  	$scope.games_info = [];
  	$scope.index = 0;
	$scope.output;
  	$scope.getGameID = function () {
    	$http.get('./games-schedule.json').success(function(data) {
            for(var i = 0; i < data.schedule.length; i++) {
	    		for(var j = 0; j < data.schedule[i].games.length; j++) {
	    			if(data.schedule[i].games[j].away.alias == $scope.teamID || data.schedule[i].games[j].home.alias == $scope.teamID) {
	    				$scope.games_id.push({ id: data.schedule[i].games[j].id});
	    			}
	    		}
	    	}
	    	// console.log($scope.games_id);
	    	$scope.getGameStats();
        });
	}

  	$scope.getGameStats = function () {
  		$scope.games_info = [];
  		$scope.index = 0;
    	// console.log("s");
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
	    // console.log($scope.games_info.length);
	    saveDiscuss.setDiscuss($scope.games_info);
	    $scope.output = saveDiscuss.getDiscuss();
		// console.log(saveDiscuss);
	}
	$scope.getGameID();

  }])
 .service('saveDiscuss', function() {
    var discuss;
    var rival;

    var setDiscuss = function(obj) {
		  discuss = obj;
    };

    var getDiscuss = function(){
    	return discuss;
  	};

  	var setRival = function(obj) {
		  rival = obj;
    };

    var getRival = function(){
    	return rival;
  	};

    return {
  		setDiscuss: setDiscuss,
  		getDiscuss: getDiscuss,
  		setRival: setRival,
  		getRival: getRival,
    };
  });