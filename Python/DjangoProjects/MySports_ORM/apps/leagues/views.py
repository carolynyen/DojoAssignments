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
    user = League.objects.filter(sport="Baseball")
    context = {"leagues": user, "teams": Team.objects.all(), "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index2(request):
    user = League.objects.filter(name__contains= "Womens'")
    context = {"leagues": user, "teams": Team.objects.all(), "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index3(request):
    user = League.objects.filter(sport__contains= "Hockey")
    context = {"leagues": user, "teams": Team.objects.all(), "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index4(request):
    user = League.objects.exclude(sport= "Football")
    context = {"leagues": user, "teams": Team.objects.all(), "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index5(request):
    user = League.objects.filter(name__contains= "Conference")
    context = {"leagues": user, "teams": Team.objects.all(), "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index6(request):
    user = League.objects.filter(name__contains= "Atlantic")
    context = {"leagues": user, "teams": Team.objects.all(), "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index7(request):
    user = Team.objects.filter(location= "Dallas")
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index8(request):
    user = Team.objects.filter(team_name= "Raptors")
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index9(request):
    user = Team.objects.filter(location__contains= "City")
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index10(request):
    user = Team.objects.filter(team_name__startswith= "T")|Team.objects.filter(location__startswith= "T")
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index11(request):
    user = Team.objects.order_by('location')
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index12(request):
    user = Team.objects.order_by('-team_name')
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all(),}
    return render(request, "leagues/index.html", context)

def index13(request):
    user = Player.objects.filter(last_name="Cooper")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user,}
    return render(request, "leagues/index.html", context)

def index14(request):
    user = Player.objects.filter(first_name="Joshua")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user,}
    return render(request, "leagues/index.html", context)

def index15(request):
    user = Player.objects.filter(last_name="Cooper").exclude(first_name="Joshua")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user,}
    return render(request, "leagues/index.html", context)

def index16(request):
    user = Player.objects.filter(first_name="Alexander")|Player.objects.filter(first_name="Wyatt")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user,}
    return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
