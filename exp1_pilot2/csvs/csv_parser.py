import csv
def make_filler(input_csv, output):
    output_string = "const filler_header = [\""
    with open(input_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        filler_header = []
        for line in csv_reader:
            if line[0] == 'index':
                for l in line:
                    output_string += l + "\", \""
                    filler_header.append(l)
                output_string = output_string[:-3] + "]\n\nconst filler_trials = {\n\t"
            else:
                output_string += line[1] + ": {\n\t\t"
                for i in range(len(line)) :
                    output_string += filler_header[i] + ": \"" + line[i] + "\",\n\t\t"
                # add correct audio file name
                audio_file = "AnF/" + line[1] + "_" + line[-1] + "_" + "AnF.wav\",\n\t\t"
                output_string += "audio_filename: \"" + audio_file
                output_string = output_string[:-4] +"\n\t},\n\t"
                
    output_string = output_string[:-3] + "\n}"
    print(output_string)
    out_file = open(output, 'w')
    out_file.write(output_string)
    out_file.close()
    print("file written")

csv_path = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp1_pilot2/csvs/trials_filler.csv"
output_path = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp1_pilot2/csvs/trials_filler.js"
make_filler(csv_path, output_path)

def make_critical(input_csv, output):
    output_string = "const critical_critical = [\""

    talkers = ["AnF", "IF1","IF3","IM1","IM2"]
    with open(input_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        critical_header = []
        for line in csv_reader:
            if line[0] == 'index':
                for l in line:
                    output_string += l + "\", \""
                    critical_header.append(l)
                output_string = output_string[:-3] + "]\n\nconst critical_trials = {\n\t"
            else:
                output_string += line[3] + "_" + line[-1] + ": {\n\t\t"
                for i in range(len(line)) :
                    output_string += critical_header[i] + ": \"" + line[i] + "\",\n\t\t"
                # add correct audio file name
                talker_tags = [line[6], line[7], line[8], line[9], line[10]]
                for i in range(len(talkers)):
                    output_string += talkers[i] + "_audio_filename: \"" + talkers[i] + "/" + line[3] + "_"
                    output_string += talker_tags[i][0] + "_" + talkers[i] + "_" + talker_tags[i][-1]   
                    output_string += "_AnF_" + line[-1] + ".wav\",\n\t\t"
                output_string = output_string[:-4] +"\n\t},\n\t"
                
    output_string = output_string[:-3] + "\n}"
    print(output_string)

    out_file = open(output, 'w')
    out_file.write(output_string)
    out_file.close()
    print("file written")

csv_path = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp1_pilot2/csvs/trials_critical.csv"
output_path = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp1_pilot2/csvs/trials_critical.js"
make_critical(csv_path, output_path)

