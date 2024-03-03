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
                i_AnF1 = line.index("AnF1")
                i_AnF2 = line.index("AnF2")
                i_CF1 = line.index("CF1")
                i_CF2 = line.index("CF2")
            else:
                output_string += line[1] + ": {\n\t\t"
                for i in range(len(line)) :
                    output_string += filler_header[i] + ": \"" + line[i] + "\",\n\t\t"
                # add correct audio file name
                audio_AnF1 = "AnF1/filler/" + line[1] + "_" + "AnF1" + "_" + line[i_AnF1] + ".wav\",\n\t\t"
                audio_AnF2 = "AnF2/filler/" + line[1] + "_" + "AnF2" + "_" + line[i_AnF2] + ".wav\",\n\t\t"
                audio_CF1 = "CF1/filler/" + line[1] + "_" + "CF1" + "_" + line[i_CF1] + ".wav\",\n\t\t"
                audio_CF2 = "CF2/filler/" + line[1] + "_" + "CF2" + "_" + line[i_CF2] + ".wav\",\n\t\t"
                output_string += "audio_AnF1: \"" + audio_AnF1
                output_string += "audio_AnF2: \"" + audio_AnF2
                output_string += "audio_CF1: \"" + audio_CF1
                output_string += "audio_CF2: \"" + audio_CF2
                output_string = output_string[:-4] +"\n\t},\n\t"
                
    output_string = output_string[:-3] + "\n}"
    out_file = open(output, 'w')
    out_file.write(output_string)
    out_file.close()
    print("file written")

csv_path = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp2/csvs/trials_filler.csv"
output_path = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp2/csvs/trials_filler.js"
make_filler(csv_path, output_path)

def make_critical(input_csv, output):
    output_string = "const critical_critical = [\""

    with open(input_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        critical_header = []
        for line in csv_reader:
            if line[0] == 'index':
                tag_idx = []
                tag_name = []
                for l in line:
                    output_string += l + "\", \""
                    critical_header.append(l)
                    if l[0] == "A" or l[0] == "C":
                        tag_idx.append(line.index(l))
                        tag_name.append(l)
                output_string = output_string[:-3] + "]\n\nconst critical_trials = {\n\t"
            else:
                output_string += line[3] + "_" + line[-1] + ": {\n\t\t"
                for i in range(len(line)) :
                    if i not in tag_idx:
                        output_string += critical_header[i] + ": \"" + line[i] + "\",\n\t\t"
                # add correct audio file name
                for i in range(len(tag_name)):
                    output_string += "audio_" + tag_name[i] + ": \"" + tag_name[i].split("_")[0] + "/spliced/" + line[3] + "_"
                    output_string += tag_name[i] + "_" + line[tag_idx[i]] + ".wav\",\n\t\t"
                output_string = output_string[:-4] +"\n\t},\n\t"
                
    output_string = output_string[:-3] + "\n}"

    out_file = open(output, 'w')
    out_file.write(output_string)
    out_file.close()
    print("file written")

csv_path = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp2/csvs/trials_critical.csv"
output_path = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp2/csvs/trials_critical.js"
make_critical(csv_path, output_path)

