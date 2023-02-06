from django.core.handlers.wsgi import WSGIRequest
from libs.bases import BaseHandler


class ContactHandler(BaseHandler):

    @staticmethod
    def index(request: WSGIRequest):
        return BaseHandler.html_response(request=request, view='contact.html', page_title='ruriazz - Contact')