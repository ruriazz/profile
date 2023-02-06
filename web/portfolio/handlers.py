from django.core.handlers.wsgi import WSGIRequest
from libs.bases import BaseHandler


class PortfolioHandler(BaseHandler):

    @staticmethod
    def index(request: WSGIRequest):
        return BaseHandler.html_response(request=request, view='portfolio.html', page_title='ruriazz - Portfolio')