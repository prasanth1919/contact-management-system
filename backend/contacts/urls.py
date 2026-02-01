from django.urls import path
from .views import (contact_list_create,contact_detail,search_contacts)

urlpatterns = [
    path('contacts/',contact_list_create,name='contact-list-create'),
    path('contacts/<int:pk>/',contact_detail,name='contact-detail'),
    path('contacts/search/',search_contacts,name='contact-search'),
]