from django.core.handlers.wsgi import WSGIRequest
from libs.bases import BaseHandler


class ResumeHandler(BaseHandler):

    @staticmethod
    def index(request: WSGIRequest):
        return BaseHandler.html_response(request=request, view='resume.html', page_title='ruriazz - Resume')