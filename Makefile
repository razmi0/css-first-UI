checkpoint:
	@git add -A
	@git commit -m "checkpoint at $$(date + '%Y')"
	@git push
	@echo "checkpoint done!"