docker build --no-cache -f SQL\Dockerfile.PostgreSql -t carsharing/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t carsharing/app ../..
