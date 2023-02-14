docker login ghcr.io
docker buildx create --name Cw4F9_mE47s
docker buildx use Cw4F9_mE47s
docker buildx build \
    --platform linux/amd64 \
    -t ghcr.io/ruriazz/profile:latest \
    -f container/Dockerfile \
    --push .