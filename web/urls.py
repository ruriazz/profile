from django.urls.conf import path

app_name = 'ruriazz_web'


from .about.handlers import AboutHandler
from .resume.handlers import ResumeHandler
from .portfolio.handlers import PortfolioHandler
from .contact.handlers import ContactHandler
from .property.handlers import PropertyHandler

urlpatterns = [
    path('', AboutHandler.index),
    path(r'resume', ResumeHandler.index),
    path(r'portfolio', PortfolioHandler.index),
    path(r'contact', ContactHandler.index),
    path(r'robots.txt', PropertyHandler.robot_txt),
    path(r'sitemap.xml', PropertyHandler.sitemap_xml),
    path(r'_static/_/<str:ctype>/<str:fname>', PropertyHandler.sitemap_xml)
]