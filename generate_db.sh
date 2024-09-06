#!/bin/bash

# Directories
db_dir="public/db"
sql_dir="src/sql"

# Ensure the db_dir exists
mkdir -p "$db_dir"

# Find all .sql files in the sql_dir
for sql_file in "$sql_dir"/*.sql; do
    # Extract the base filename without extension
    base_filename=$(basename "$sql_file" .sql)

    # Construct the corresponding database file path
    db_file="$db_dir/$base_filename.db"

    echo "Generating database: $db_file from SQL file: $sql_file"
    # Run the sqlite3 command to generate the database
    sqlite3 "$db_file" < "$sql_file"
done
