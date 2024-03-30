checkpoint:
	@git add -A
	@git commit -m "checkpoint at $$(date + '%Y-%m-%d %H:%M:%S')"
	@git push
	@echo "checkpoint done!"