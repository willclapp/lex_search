import csv

# EXPECT TO HAVE TWO CSVS
# WHERE ONE IS REFERENCE, ONE IS ACTUAL;
# BOTH ARE TWO COLUMNS, WITH WORD ON LEFT
# AND RAW PICTURE # ON RIGHT

def pic_checker(pic_check_csv, multpic_check_csv):
    # First, create list of all files that should be there
    # by reading through the CSV
    mp_dict = {}
    with open(multpic_check_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for line in csv_reader:
            mp_dict[line[0].lower()] = int(line[1])

    with open(pic_check_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for line in csv_reader:
            if int(line[1]) == mp_dict[line[0].lower()]:
                pass
            else:
                print("multipic for " + line[0] + " is "  + str(mp_dict[line[0].lower()]))
                print("pic for " + line[0] + " is "  + line[1])

pic_checker(
    "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp1/csvs/pic_check.csv", 
    "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp1/csvs/multpic_check.csv"
    )