from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Count
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
    user = Player.objects.exclude(curr_team__location = "Washington",curr_team__team_name = "Roughriders").filter(last_name="Flores")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user}
    return render(request, "leagues/index.html", context)

def index9(request):
    user = Team.objects.filter(all_players__first_name="Samuel", all_players__last_name="Evans")
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all()}
    return render(request, "leagues/index.html", context)

def index10(request):
    user = Player.objects.filter(all_teams__location="Manitoba", all_teams__team_name="Tiger-Cats")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user}
    return render(request, "leagues/index.html", context)

def index11(request):
    user = Player.objects.exclude(curr_team__location="Wichita", curr_team__team_name="Vikings").filter(all_teams__location="Wichita", all_teams__team_name="Vikings")
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user}
    return render(request, "leagues/index.html", context)

def index12(request):
    user = Team.objects.filter(all_players__first_name="Jacob", all_players__last_name="Gray").exclude(curr_players__curr_team__location="Oregon", curr_players__curr_team__team_name="Colts").order_by('id')
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all()}
    return render(request, "leagues/index.html", context)

def index13(request):
    user = Player.objects.filter(first_name="Joshua", all_teams__league__name="Atlantic Federation of Amateur Baseball Players").order_by('id')
    context = {"leagues": League.objects.all(), "teams": Team.objects.all(), "players": user}
    return render(request, "leagues/index.html", context)

def index14(request):
    user = Team.objects.annotate(count = Count('all_players')).filter(count__gte = 12).order_by('id')
    context = {"leagues": League.objects.all(), "teams": user, "players": Player.objects.all()}
    return render(request, "leagues/index.html", context)

def index15(request):
    user = Player.objects.annotate(num_teams=Count('all_teams')).order_by('num_teams', 'id')
    context = {"players": user, "leagues": League.objects.all(), "teams": Team.objects.all(),}
    return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
