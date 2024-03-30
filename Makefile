checkpoint:
	@git add -A
	@git commit -m "checkpoint at $$(date + '%Y-%m-%dT%H:%M:%S%z')"
	@git push
	@echo "checkpoint done!"