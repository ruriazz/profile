from django.core.handlers.wsgi import WSGIRequest
from libs.bases import BaseHandler


class PropertyHandler(BaseHandler):

    @staticmethod
    def robot_txt(request: WSGIRequest):
        return BaseHandler.file_response(file_path='props/robots.txt', content_type='text/plain; charset=utf8')

    @staticmethod
    def sitemap_xml(request):
        return BaseHandler.file_response(file_path='props/sitemap.xml', content_type='text/xml')


def page_not_found(request: WSGIRequest, *args, **kwarg):
    return BaseHandler.html_response(request=request, view='404.html', with_wrapper=False)