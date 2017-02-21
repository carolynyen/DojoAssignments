from django.shortcuts import render, redirect
from .models import League, Team, Player
from . import team_maker

def index(request):
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
	}
	return render(request, "leagues/index.html", context)

def index1(request):
    user = Team.objects.filter(league__name="Atlantic Soccer Conference")
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index2(request):
    user = Player.objects.filter(curr_team__team_name = "Penguins", curr_team__location= "Boston")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user,}
    return render(request, "leagues/index.html", context)

def index3(request):
    user = Player.objects.filter(curr_team__league__name = "International Collegiate Baseball Conference")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user}
    return render(request, "leagues/index.html", context)

def index4(request):
    user = Player.objects.filter(curr_team__league__name = "American Conference of Amateur Football", last_name="Lopez")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user}
    return render(request, "leagues/index.html", context)

def index5(request):
    user = Player.objects.filter(curr_team__league__sport = "Football")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user}
    return render(request, "leagues/index.html", context)

def index6(request):
    user = Team.objects.filter(curr_players__first_name = "Sophia")
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all()}
    return render(request, "leagues/index.html", context)

def index7(request):
    user = League.objects.filter(teams__curr_players__first_name = "Sophia")
    context = {"leagues": user, "teams": Team.objects.all(), "players": Player.objects.all()}
    return render(request, "leagues/index.html", context)

def index8(request):
    user = Player.objects.exclude(curr_team__location = "Washinton",curr_team__team_name = "Roughriders").filter(last_name="Flores")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user}
    return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
