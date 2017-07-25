from django.shortcuts import render, HttpResponse

def index(request):
    return render(request,'index.html')
    #return HttpResponse("test")

def create_program(request):
    return render(request, 'create_program.html')

def submit_form(request):
    print("here")
    if request.method == 'POST':
        print("received form!")
        print (request.POST['gender'])
        
    return render(request, 'form_values.html', {'form' : request.POST})

def lift_analyser(request):
    return render(request, 'lift_analyser.html')
# Create your views here.
