import csv
from os import listdir
from os import remove
import shutil

def move_filler(input_csv, input_dir, out_dir):
    # First, create list of all files that should be there
    # by reading through the CSV
    with open(input_csv) as csv_file:
        talkers = ['AnF1', 'AnF2', 'CF1', 'CF2']
        csv_reader = csv.reader(csv_file, delimiter=",")
        for line in csv_reader:
            if line[0] == 'index':
                i_AnF1 = line.index('AnF1')
                i_AnF2 = line.index('AnF2')
                i_CF1 = line.index('CF1')
                i_CF2 = line.index('CF2')
                indices = [i_AnF1, i_AnF2, i_CF1, i_CF2]
            else:
                for i in range(0, len(talkers)):
                    fname = "_".join([line[1], talkers[i], line[indices[i]]]) + ".wav"
                    shutil.copyfile(input_dir+talkers[i]+"/filler/"+fname, out_dir+talkers[i]+"/filler/"+fname)

filler_csv = "./trials_filler.csv"
input_dir = "/Users/willclapp/Desktop/ART/artclass/project/recording/Exp2_root/"
out_dir = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp2/audio/"
# move_filler(filler_csv, input_dir, out_dir)




def move_critical(input_csv, input_dir, out_dir):
    speakers = ["AnF1_AnF1", "AnF1_CF1", "AnF1_CF2", "AnF2_AnF2", "AnF2_CF1", "AnF2_CF2", "CF1_CF1", "CF1_AnF1", "CF1_AnF2", "CF2_CF2", "CF2_AnF1", "CF2_AnF2"]
    indices = []
    with open(input_csv) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for line in csv_reader:
            if line[0] == 'index':
                for s in speakers:
                    indices.append(line.index(s))
            else:
                for i in range(0, len(speakers)):
                    fname = "_".join([line[3], speakers[i], line[indices[i]]]) + ".wav"
                    print(fname)
                    foldname = speakers[i].split("_")[0]
                    shutil.copyfile(input_dir+foldname+"/spliced/"+fname, out_dir+foldname+"/spliced/"+fname)

critical_csv = "./trials_critical.csv"
input_dir = "/Users/willclapp/Desktop/ART/artclass/project/recording/Exp2_root/"
out_dir = "/Users/willclapp/Desktop/ART/artclass/project/experiments/exp2/audio/"
move_critical(critical_csv, input_dir, out_dir)