from django import forms

class TestForm(forms.Form):
    firstname = forms.CharField(max_length=100)
    lastname = forms.CharField(max_length=100)
    gender = forms.CharField()
