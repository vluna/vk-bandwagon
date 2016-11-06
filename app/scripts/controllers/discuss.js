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
  	$scope.games_id = [];
  	$scope.games_info = [];
  	$scope.index = 0;

  	$scope.getGameID = function () {
  		var deferred = $q.defer();
	    $http.get('./games-schedule').success(function(data){
	    	for(var i = 0; i < data.schedule.length; i++) {
	    		for(var j = 0; j < data.schedule[i].games.length; j++) {
	    			if(data.schedule[i].games[j].away.alias == "BUF" || data.schedule[i].games[j].home.alias == "BUF") {
	    				$scope.games_id.push({ id: data.schedule[i].games[j].id});
	    	 
	    			}
	    		}
	    	}
	    	deferred.resolve();
	    })

	    return deferred.promise;
	}

    $scope.getGameID().then(function() {
	    for(var i = 0; i < $scope.games_id.length; i++) {
	    	$http.get('./game-result').success(function(data){
	    		for(var j = 0; j < data.games.length; j++) {
	    			if(data.games[j].id == $scope.games_id[$scope.index].id) {
	    				// console.log(data.games[j]);
		    			if(data.games[j].home.market == "Buffalo") {
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
			    		} else if(data.games[j].away.market == "Buffalo") {
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
	    		$scope.index++;
	    	});
	    }
	    console.log($scope.games_info);
	})
  }]);
