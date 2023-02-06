from django.core.handlers.wsgi import WSGIRequest
from libs.bases import BaseHandler


class AboutHandler(BaseHandler):

    @staticmethod
    def index(request: WSGIRequest):
        return BaseHandler.html_response(request=request, view='index.html', page_title='ruriazz - About')