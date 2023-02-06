from django.urls import re_path, include

urlpatterns = [
    re_path(r'', include('web.urls', namespace='ruriazz_web')),
    re_path(r'^api/', include('api.urls', namespace='ruriazz_api'))
]

handler404 = 'web.property.handlers.page_not_found'
handler500 = 'web.property.handlers.page_not_found'
handler403 = 'web.property.handlers.page_not_found'
handler400 = 'web.property.handlers.page_not_found'