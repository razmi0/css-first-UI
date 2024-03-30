checkpoint:
	@git add -A
	@git commit -m "checkpoint at $$(date)"
	@git push
	@echo "checkpoint done!"