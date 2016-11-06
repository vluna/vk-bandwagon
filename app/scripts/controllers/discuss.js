'use strict';

/**
 * @ngdoc function
 * @name vkBandwagonApp.controller:DiscussCtrl
 * @description
 * # DiscussCtrl
 * Controller of the vkBandwagonApp
 */
angular.module('vkBandwagonApp')
  .controller('DiscussCtrl', ['$scope', '$http', function ($scope, $http) {
  	$scope.games_id = [];
  	$scope.games_info = [];
  	$scope.index = 0;

    $http.get('./games-schedule').success(function(data){
    	for(var i = 0; i < data.schedule.length; i++) {
    		for(var j = 0; j < data.schedule[i].games.length; j++) {
    			if(data.schedule[i].games[j].away.alias == "VAN" || data.schedule[i].games[j].away.alias == "VAN") {
    				$scope.games_id.push(
	    				data.schedule[i].games[j].id
	    			)
    				$scope.index++; 
    			}
    		}
    	}
    });
    console.log($scope.games_id.Array[0]);
    console.log($scope.games_id.length);
    for(var i = 0; i < $scope.games_id.length; i++) {
    	$http.get('https://api.sportradar.us/nhl-ot4/games/' + $scope.games_id[i] + '/boxscore.json?api_key=7zwd7ch6g37zmj5ejcjea4r3').success(function(data){
    		console.log("in");
    		if(data.home.name == "Canucks") {
    			$scope.games_info.push({
	    			total_points: data.home.points,
	    			point_leader_name: data.home.leaders.points.full_name,
	    			point_leader_number: data.home.leaders.points.jersey_number,
	    			point_leader_goals: data.home.leaders.points.statistics.total.goals,
	    			point_leader_assists: data.home.leaders.points.statistics.total.assists,
	    			point_leader_points: data.home.leaders.points.statistics.total.points,

	    			goals_leader_name: data.home.leaders.goals.full_name,
	    			goals_leader_number: data.home.leaders.goals.jersey_number,
	    			goals_leader_goals: data.home.leaders.goals.statistics.total.goals,
	    			goals_leader_assists: data.home.leaders.goals.statistics.total.assists,
	    			goals_leader_points: data.home.leaders.goals.statistics.total.points,

	    			assists_leader_name: data.home.leaders.assists.full_name,
	    			assists_leader_number: data.home.leaders.assists.jersey_number,
	    			assists_leader_goals: data.home.leaders.assists.statistics.total.goals,
	    			assists_leader_assists: data.home.leaders.assists.statistics.total.assists,
	    			assists_leader_points: data.home.leaders.assists.statistics.total.points
	    		});
    		} else {
    			$scope.games_info.push({
	    			total_points: data.away.points,
	    			point_leader_name: data.away.leaders.points.full_name,
	    			point_leader_number: data.away.leaders.points.jersey_number,
	    			point_leader_goals: data.away.leaders.points.statistics.total.goals,
	    			point_leader_assists: data.away.leaders.points.statistics.total.assists,
	    			point_leader_points: data.away.leaders.points.statistics.total.points,

	    			goals_leader_name: data.away.leaders.goals.full_name,
	    			goals_leader_number: data.away.leaders.goals.jersey_number,
	    			goals_leader_goals: data.away.leaders.goals.statistics.total.goals,
	    			goals_leader_assists: data.away.leaders.goals.statistics.total.assists,
	    			goals_leader_points: data.away.leaders.goals.statistics.total.points,

	    			assists_leader_name: data.away.leaders.assists.full_name,
	    			assists_leader_number: data.away.leaders.assists.jersey_number,
	    			assists_leader_goals: data.away.leaders.assists.statistics.total.goals,
	    			assists_leader_assists: data.away.leaders.assists.statistics.total.assists,
	    			assists_leader_points: data.away.leaders.assists.statistics.total.points
	    		});
    		}

    		console.log($scope.games_info);
    	});
    }
  }]);
