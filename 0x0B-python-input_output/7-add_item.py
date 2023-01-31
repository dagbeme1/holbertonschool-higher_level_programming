#!/usr/bin/python3
"""
Module 7-add_item
Contains function that adds and saves to Python obj to JSON file; loads objects
# run with ./9-add_item.py
#
# cat add_item.json ; echo ""
# expect output: []
#
# ./9-add_item.py some random args
# cat add_item.json ; echo ""
# expect output: ["some", "random", "args"]
"""
"""Add all arguments to a Python list and save them to a file."""
import sys

if __name__ == "__main__":
    save_to_json_file = __import__('7-save_to_json_file').save_to_json_file
    load_from_json_file = \
        __import__('8-load_from_json_file').load_from_json_file

    try:
        items = load_from_json_file("add_item.json")
    except FileNotFoundError:
        items = []
    items.extend(sys.argv[1:])
    save_to_json_file(items, "add_item.json")
